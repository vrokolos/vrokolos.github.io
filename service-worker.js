self.addEventListener('install', (event) => {
    const urlsToCache = [
        '/',
        '/index.html',
        '/manifest.json',
        '/icons/icon-192x192.png',
        '/styles/globals.css',
        '/scripts/games.json.gz',
        '/scripts/games_json_hash.txt',
    ];

    event.waitUntil(
        caches.open('my-cache').then(async (cache) => {
            // Fetch each resource individually and only cache successful responses.
            const fetchPromises = urlsToCache.map((url) =>
                fetch(url, { cache: 'no-cache' })
                    .then((resp) => ({ url, resp }))
                    .catch((err) => ({ url, err }))
            );

            const results = await Promise.allSettled(fetchPromises);
            for (const r of results) {
                if (r.status === 'fulfilled') {
                    const { url, resp, err } = r.value || {};
                    if (resp && resp.ok) {
                        try {
                            await cache.put(url, resp.clone());
                        } catch (e) {
                            console.warn('Failed to cache', url, e);
                        }
                    } else {
                        console.warn('Resource not ok, not caching', url, resp && resp.status, err);
                    }
                } else {
                    // If the promise itself was rejected, log reason
                    console.warn('Failed to fetch resource during install', r.reason);
                }
            }
            // finish install without failing if some resources couldn't be cached
            return;
        }).catch((e) => {
            console.error('Error opening cache during install', e);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request).catch(() => {
                if (event.request.mode === 'navigate') {
                    return caches.match('/index.html');
                }
            });
        })
    );
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