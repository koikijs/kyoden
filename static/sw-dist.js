self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open('static')
      .then(cache => cache.addAll(["/offline","/_next/static/runtime/webpack-f5e50b6b501ccea2a79b.js","/_next/static/chunks/commons.7117d6bc4f53a847fa5d.js","/_next/static/css/styles.7a6f6cbd.chunk.css","/_next/static/chunks/styles.2d82cce85cfdc28d1612.js","/_next/static/runtime/main-f494a2996abc73ed4426.js"]))
      .catch(error => console.error(error)),
  );
});

self.addEventListener('activate', (evt) => {
  evt.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  if (
    event.request.mode === 'navigate'
    || (event.request.method === 'GET' && event.request.headers.get('accept').includes('text/html'))
  ) {
    console.log('## Get HTML', event.request.url);
    event.respondWith(
      fetch(event.request).catch(
        () => console.log('## Response offline page') || caches.match('/offline'),
      ),
    );
  } else {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          console.log('## Response from cache', event.request.url);
          return response;
        }
        console.log('## Response from origin', event.request.url);
        return fetch(event.request);
      }),
    );
  }
});
