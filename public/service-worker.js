// public/service-worker.js
self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('your-cache-name').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/static/css/main.chunk.css',
          '/static/js/2.chunk.js',
          '/static/js/main.chunk.js',
          // Add other files you want to cache
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  