/* var MiCache = "MiCache_v1";
var archivos = [
  "index.html",
  "css/estilos.css",
  "css/app.js",
  "sw_oaf.js",
  "images/icons/icon-72x72.png",
  "images/icons/icon-96x96.png",
  "images/icons/icon-128x128.png",
  "images/icons/icon-144x144.png",
  "images/icons/icon-152x152.png",
  "images/icons/icon-192x192.png",
  "images/icons/icon-384x384.png",
  "images/icons/icon-512x512.png",
  "manifest.json"
  
];


//Borrar caches diferentes al actual
  self.addEventListener('activate', function(event){
    event.waitUntil(
        // Get all the cache name
        caches.keys().then(function(cacheNames){
            // wait all cache deleted
            return Promise.all(
                // filter out staticCacheName (only keep staticCacheName)
                cacheNames.filter( function(name){
                    return name.startsWith('MiCache') && name != MiCache;
                }).map(function(name){
                    // delete cache, return promise
                    return caches.delete(name);
                })
            )
        })
    .then(self.clients.claim())); //this line is important in some contexts
}); */

  self.addEventListener("install", function(event) {
    event.waitUntil(
      caches.open(MiCache).then(function(cache) {
        console.log('Cache: ', MiCache, 'abierto');
        return cache.addAll(archivos);
      },
      function(error){
        console.log('Datos recargados desde cache')
      }
      )
    );
  });

  self.addEventListener('fetch', function(evento) {
    evento.respondWith(
      caches.match(evento.request).then(function(cacheRespuesta){
        return(cacheRespuesta) || fetch(evento.request);
        })
       );
      });