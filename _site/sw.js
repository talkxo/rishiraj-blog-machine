const CACHE_NAME = 'rishiraj-blog-v5';
const urlsToCache = [
  '/',
  '/css/main.css',
  '/assets/images/workspace-hero.jpg',
  '/assets/images/workspace-hero.webp',
  '/assets/images/favicons/favicon.ico',
  '/assets/images/favicons/favicon-32x32.png',
  '/assets/images/favicons/apple-icon-180x180.png',
  '/assets/images/favicons/android-icon-192x192.png'
];

// Cache strategies
const CACHE_STRATEGIES = {
  STATIC: 'static',
  DYNAMIC: 'dynamic'
};

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache if available
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Return cached version or fetch from network
        if (response) {
          return response;
        }
        
        // Clone the request
        const fetchRequest = event.request.clone();
        
        return fetch(fetchRequest).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }
          
          // Clone the response
          const responseToCache = response.clone();
          
          // Cache static assets with long expiration
          const url = new URL(event.request.url);
          const isStaticAsset = url.pathname.match(/\.(css|js|jpg|jpeg|png|gif|webp|ico|svg|woff|woff2|ttf|eot)$/);
          
          if (isStaticAsset) {
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          
          return response;
        });
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
