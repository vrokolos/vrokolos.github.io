const CACHE_VERSION = 'v1';
const CACHE_NAME = `my-cache-${CACHE_VERSION}`;

self.addEventListener('install', (event) => {
    // Precache a minimal set of assets. Keep this small to avoid stale HTML
    const urlsToCache = [
        '/',
        '/index.html',
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
            cache.put(request, response.clone()).catch(() => {});
            return response;
        }
    } catch (e) {
        // network failed, fallthrough to cache
    }
    const cached = await caches.match(request);
    if (cached) return cached;
    // For navigations fall back to index.html
    if (request.mode === 'navigate') {
        return caches.match('/index.html');
    }
    return new Response(null, { status: 504, statusText: 'Gateway Timeout' });
}

async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
        const resp = await fetch(request);
        if (resp && resp.ok) {
            const cache = await caches.open(CACHE_NAME);
            cache.put(request, resp.clone()).catch(() => {});
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

    const url = new URL(req.url);

    // Force network-first for Next.js build artifacts and manifests
    if (url.pathname.startsWith('/_next/') || url.pathname.endsWith('_buildManifest.js') || url.pathname.endsWith('_ssgManifest.js')) {
        event.respondWith(networkFirst(req));
        return;
    }

    // Fonts CSS (avoid caching broken requests)
    if (url.hostname.includes('fonts.googleapis.com') || url.hostname.includes('fonts.gstatic.com')) {
        event.respondWith(networkFirst(req));
        return;
    }

    // Default: cache-first for static assets we precached or fetched before
    event.respondWith(cacheFirst(req));
});

self.addEventListener('activate', (event) => {
    const cacheWhitelist = ['my-cache'];
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
});