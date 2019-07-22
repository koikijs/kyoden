self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open('static')
      .then(cache => cache.addAll(["/offline","/_next/static/runtime/webpack-f5e50b6b501ccea2a79b.js","/_next/static/chunks/commons.90deb93fcaf2f0856a41.js","/_next/static/css/styles.5d18b124.chunk.css","/_next/static/chunks/styles.012e1e29a9fcaf0bb712.js","/_next/static/runtime/main-9d750aad300d254bb8f4.js"]))
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
