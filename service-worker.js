const CACHE_VERSION = 'v1';
const CACHE_NAME = `my-cache-${CACHE_VERSION}`;
const GAMES_GZ_PATH = '/scripts/games.json.gz';

self.addEventListener('install', (event) => {
    // Precache a minimal set of assets. Keep this small to avoid stale HTML
    const urlsToCache = [
        '/scripts/games.json.gz',
        '/scripts/games_json_hash.txt',
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

    // Only intercept the two games-related files — everything else should bypass the SW.
    if (url.origin === self.location.origin && (url.pathname === GAMES_GZ_PATH || url.pathname.endsWith('/games_json_hash.txt') || url.pathname.endsWith('/games.json.gz'))) {
        // Use a safe handler which returns a fresh Response built from a buffered body
        // so downstream code can safely read/clone it without "body already used" issues.
        event.respondWith(handleGamesRequest(req));
        return;
    }

    // If a client tries to load build/ssg manifests and they fail, return minimal harmless stubs
    // so the runtime doesn't throw and reload the page. Only handle same-origin manifest paths.
    if (url.origin === self.location.origin && (url.pathname.endsWith('_buildManifest.js') || url.pathname.endsWith('_ssgManifest.js'))) {
        event.respondWith(handleManifestStub(req));
        return;
    }

    // Not one of the games files — let the browser handle it directly.
    return;
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = [CACHE_NAME];
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
            const buffer = await netResp.arrayBuffer();
            // Save to cache asynchronously
            caches.open(CACHE_NAME).then((cache) => {
                const respForCache = new Response(buffer, {
                    status: netResp.status,
                    statusText: netResp.statusText,
                    headers: netResp.headers,
                });
                cache.put(request, respForCache).catch(() => {});
            }).catch(() => {});
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

// Try to fetch the real manifest; if that fails, fall back to cache, and finally
// return a minimal JS stub that defines expected objects to avoid runtime crashes.
async function handleManifestStub(request) {
    try {
        const resp = await fetch(request, { cache: 'no-cache' });
        if (resp && resp.ok) return resp;
    } catch (e) {
        console.warn('handleManifestStub network fetch failed', request.url, e);
    }

    const cached = await caches.match(request);
    if (cached) return cached;

    // Return a small JS stub that creates empty objects/exports the minimal shape
    // the client runtime expects. This prevents errors like "Failed to load client build manifest".
    const stub = `self.__BUILD_MANIFEST = self.__BUILD_MANIFEST || {}; self.__SSG_MANIFEST = self.__SSG_MANIFEST || new Set();`;
    return new Response(stub, { headers: { 'Content-Type': 'application/javascript' } });
}