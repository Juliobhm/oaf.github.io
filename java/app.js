
console.log('Se ha abierto app.js');


if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
      navigator.serviceWorker.register('sw03.js').then(function(registration) {
        // Registration was successful
        console.log('ServiceWorker registrado correctamente, ', registration);
      }, function(err) {
        // registration failed :(
        console.log('Fallo en el registro de ServiceWorker', err);
      });
    });
  }

/*   if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw03.js').then(function(reg) {
        console.log('Successfully registered service worker', reg);
    }).catch(function(err) {
        console.warn('Error whilst registering service worker', err);
    });
    } */