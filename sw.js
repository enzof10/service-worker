
self.addEventListener('fetch', function (event) {
    console.log('event: ', event);
    miFuncion(); // Llamada a la función dentro del evento fetch
    importScripts("../otro.js")
    // Resto de la lógica del evento fetch
});
function miFuncion() {
    // Lógica de la función
    console.log('Hola desde miFuncion en el serviceWorker ssss');
}
// Escucha el evento de mensajes del hilo principal
// self.addEventListener('message', function (event) {
//     const { type, payload } = event.data;

//     if (type === 'function') {
//         // Ejecuta la función recibida desde el hilo principal
//         payload();
//     }
// });

self.addEventListener('message', function (event) {
    const { type, payload } = event.data;

    if (type === 'function') {
        // Convierte la cadena de la función en una función nuevamente
        const miFuncion = eval('(' + payload + ')');
        // Verifica si miFuncion es realmente una función
        if (typeof miFuncion === 'function') {
            // Ejecuta la función recibida desde el hilo principal
            miFuncion();
        } else {
            console.log('Error: payload no es una función válida');
        }
    }
});