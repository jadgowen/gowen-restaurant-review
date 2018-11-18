//Verify serviceWorker exists in browser, register serviceWorker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
  .register('/sw.js')
  .then(function() {
    console.log('Service Worker has been registered.')
  })
  .catch(function(error) {
    console.log(error);
  });
}
