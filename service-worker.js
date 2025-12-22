const CACHE_VERSION = 'v1';
const CACHE_NAME = `my-cache-${CACHE_VERSION}`;
// Separate cache for portrait images
const PORTRAIT_CACHE_NAME = `portrait-cache-${CACHE_VERSION}`;
const GAMES_GZ_PATH = '/scripts/games.json.gz';

self.addEventListener('install', (event) => {
    // Precache a minimal set of assets. Keep this small to avoid stale HTML
    const urlsToCache = [
        '/scripts/games.json.gz',
    ];

    event.waitUntil(
        caches.open(CACHE_NAME).then(async (cache) => {
            for (const url of urlsToCache) {
                try {
                    const resp = await fetch(url, { cache: 'no-cache' });
                    if (resp && resp.ok) {
                        await cache.put(url, resp.clone());
                    }
                } catch (e) {
                    console.warn('Failed to precache', url, e);
                }
            }
        })
    );
    self.skipWaiting();
});

// Helpers
async function networkFirst(request) {
    try {
        const response = await fetch(request, { cache: 'no-cache' });
        if (response && response.ok) {
            const cache = await caches.open(CACHE_NAME);
            // Update the cache for future offline use (don't await to speed up)
            // Only attempt to clone/cache if the body hasn't been consumed
            try {
                if (!response.bodyUsed) {
                    cache.put(request, response.clone()).catch(() => {});
                }
            } catch (e) {
                // Some responses (opaque, redirected, or streamed) may throw when cloning.
                // In that case skip caching to avoid "body is already used" errors.
                console.warn('Skipping cache.put due to clone/bodyUsed issue', request.url, e);
            }
            return response;
        }
    } catch (e) {
        // network failed, fallthrough to cache
        console.warn('networkFirst fetch failed, will try cache', request.url, e);
    }
    const cached = await caches.match(request);
    if (cached) return cached;
    // For navigations fall back to index.html
    if (request.mode === 'navigate') {
        return caches.match('/index.html');
    }
    console.warn('networkFirst: no cache entry, returning 504 for', request.url);
    return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
        const resp = await fetch(request);
        if (resp && resp.ok) {
            const cache = await caches.open(CACHE_NAME);
            try {
                if (!resp.bodyUsed) cache.put(request, resp.clone()).catch(() => {});
            } catch (e) {
                console.warn('Skipping cache.put due to clone/bodyUsed issue', request.url, e);
            }
            return resp;
        }
    } catch (e) {}
    if (request.mode === 'navigate') return caches.match('/index.html');
    return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

// Cache-first strategy specifically for portrait images using a dedicated cache.
async function cacheFirstPortrait(request) {
    // Normalize portrait requests to avoid storing duplicate variants: remove cache-busting params
    const url = new URL(request.url);
    url.searchParams.delete('cachebust');
    url.searchParams.delete('v');
    const normalizedUrl = url.toString();

    // Check portrait cache by normalized URL string key (more robust than matching Request objects).
    const portraitCache = await caches.open(PORTRAIT_CACHE_NAME);
    const cached = await portraitCache.match(normalizedUrl);
    if (cached) return cached;

    try {
        // Bypass the browser's HTTP disk cache so we get a fresh response we can store in Cache Storage.
        const resp = await fetch(request, { cache: 'no-cache' });
        // Accept opaque responses (cross-origin) as well as ok responses so external portraits can be cached.
        if (resp && (resp.ok || resp.type === 'opaque')) {
            try {
                if (!resp.bodyUsed) await portraitCache.put(normalizedUrl, resp.clone()).catch(() => {});
            } catch (e) {
                console.warn('Skipping portrait cache.put due to clone/bodyUsed issue', request.url, e);
            }
            return resp;
        }
    } catch (e) {
        console.warn('cacheFirstPortrait fetch failed, trying generic cache', request.url, e);
    }
    // fallback to generic cache first
    const genericCached = await caches.match(normalizedUrl) || await caches.match(request);
    if (genericCached) return genericCached;
    return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

// Perform a direct network fetch; fall back to cache if network fails.
async function networkOnly(request) {
    try {
        const response = await fetch(request);
        if (response && response.ok) {
            // Update cache opportunistically, but don't block the response
            try {
                const cache = await caches.open(CACHE_NAME);
                if (!response.bodyUsed) cache.put(request, response.clone()).catch(() => {});
            } catch (e) {
                console.warn('networkOnly caching skipped', request.url, e);
            }
            return response;
        }
    } catch (e) {
        console.warn('networkOnly fetch failed, will try cache', request.url, e);
    }
    const cached = await caches.match(request);
    if (cached) return cached;
    return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

self.addEventListener('fetch', (event) => {
    const req = event.request;
    // Only handle GET
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    // If this is an image request that looks like a portrait, use the portrait cache.
    // We try to be flexible in detecting portraits: look for '/portrait' in the pathname,
    // a '/portraits/' path segment, or a `portrait` search param. Also accept generic
    // image requests when request.destination is 'image'.
    const isImage = req.destination === 'image' || /\.(png|jpg|jpeg|webp|gif|svg)$/.test(url.pathname);
    if (isImage) {
        // Examples of portrait URLs:
        // https://cdn.cloudflare.steamstatic.com/steam/apps/847370/library_600x900.jpg
        // https://cdn.steamstatic.com/steam/apps/699130/library_600x900.jpg
        // https://images.igdb.com/igdb/image/upload/t_cover_big/co3o2w.jpg
        const looksLikePortrait = url.pathname.includes('/portrait') ||
            url.pathname.includes('/portraits/') ||
            url.searchParams.has('portrait') ||
            /_600x900\.(jpg|jpeg|png|webp)$/.test(url.pathname) ||
            /t_cover_big\.(jpg|jpeg|png|webp)$/.test(url.pathname);
        if (looksLikePortrait) {
            console.log('SW: handling portrait image request', req.url);
            event.respondWith(cacheFirstPortrait(req));
            return;
        }
    }

    // Only intercept the games-related files — everything else should bypass the SW.
    if (url.origin === self.location.origin && (url.pathname === GAMES_GZ_PATH || url.pathname.endsWith('/games.json.gz') || url.pathname.endsWith('/games_json_hash.txt'))) {
        // Use a safe handler which returns a fresh Response built from a buffered body
        // so downstream code can safely read/clone it without "body already used" issues.
        event.respondWith(handleGamesRequest(req));
        return;
    }

    // We only intercept the games files and portrait images; do not handle manifests here.

    // Not one of the handled files — let the browser handle it directly.
    return;
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME, PORTRAIT_CACHE_NAME];
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheWhitelist.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    // Take control of uncontrolled clients as soon as this worker activates.
    try {
        self.clients.claim();
    } catch (e) {
        console.warn('clients.claim failed', e);
    }
});

// Handle games files (gz and hash) safely by returning a fresh Response constructed
// from the raw ArrayBuffer so the client can consume it multiple times without clone errors.
async function handleGamesRequest(request) {
    // Try network first to get the freshest copy, fall back to cache on failure
    try {
        const netResp = await fetch(request, { cache: 'no-cache' });
        if (netResp && netResp.ok) {
            // If this is the small hash file, do not write it into Cache Storage here.
            const isHashFile = request.url.endsWith('/games_json_hash.txt') || new URL(request.url).pathname.endsWith('/games_json_hash.txt');
            const buffer = await netResp.arrayBuffer();
            if (!isHashFile) {
                // Save to cache asynchronously for the gz file
                caches.open(CACHE_NAME).then((cache) => {
                    const respForCache = new Response(buffer, {
                        status: netResp.status,
                        statusText: netResp.statusText,
                        headers: netResp.headers,
                    });
                    cache.put(request, respForCache).catch(() => {});
                }).catch(() => {});
            }
            return new Response(buffer, { status: netResp.status, statusText: netResp.statusText, headers: netResp.headers });
        }
    } catch (e) {
        console.warn('handleGamesRequest network failed, will try cache', request.url, e);
    }

    // Try cache: return fresh Response from cached arrayBuffer
    const cached = await caches.match(request);
    if (cached) {
        try {
            const buffer = await cached.arrayBuffer();
            return new Response(buffer, { status: cached.status, statusText: cached.statusText, headers: cached.headers });
        } catch (e) {
            console.warn('handleGamesRequest failed to read cached body', request.url, e);
        }
    }

    return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

// Manifest stubbing removed — service worker only handles the games files now.