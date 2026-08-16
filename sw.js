self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('ep-ai-cache').then((cache) => {
      return cache.addAll([
        './',
        './index.html',
        './logo.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
