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
        // Use cache-first for the gz and the hash file (install already cached them)
        event.respondWith(cacheFirst(req));
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