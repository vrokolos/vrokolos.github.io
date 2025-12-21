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

self.addEventListener('fetch', (event) => {
    const req = event.request;
    // Only handle GET
    if (req.method !== 'GET') return;

    // Don't intercept navigation requests — let the browser / app handle page navigations.
    // This avoids interfering with client-side routing and prevents "attempted to hard navigate to the same URL" errors.
    if (req.mode === 'navigate') return;

    const url = new URL(req.url);

    // If the request is for our origin, handle it (special-case _next)
    if (url.origin === self.location.origin) {
        // Keep games.json.gz as-is (cache-first / hash-checked by the app)
        if (url.pathname === GAMES_GZ_PATH || url.pathname.endsWith('/games.json.gz')) {
            event.respondWith(cacheFirst(req));
            return;
        }

        // Force network-first for Next.js / client build artifacts and manifests
        // Match common manifest/build filenames more broadly to avoid missing variants
        const pathname = url.pathname;
        if (pathname.startsWith('/_next/') || pathname.includes('_buildManifest') || pathname.includes('_ssgManifest') || pathname.includes('client-build') || pathname.includes('client-manifest') || pathname.endsWith('.manifest.js')) {
            event.respondWith(networkFirst(req));
            return;
        }

        // Default for same-origin: network-first so users get freshest content
        event.respondWith(networkFirst(req));
        return;
    }

    // Cross-origin requests: only special-case known CDNs (fonts, cdnjs, kendo)
    const host = url.hostname;
    const isKnownCdn = host.includes('fonts.googleapis.com') || host.includes('fonts.gstatic.com') || host.includes('cdnjs.cloudflare.com') || host.includes('kendo.cdn.telerik.com');
    if (isKnownCdn) {
        // Network-first, but fall back to cache if network fails
        event.respondWith(networkFirst(req));
        return;
    }

    // For other cross-origin requests, don't intercept - let the browser handle them directly.
    // (Not calling respondWith allows normal network behavior and avoids swallowing network errors.)
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