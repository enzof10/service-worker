console.log("app.js");


if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
        .then(function (registration) {
            console.log('Service Worker registrado correctamente:', registration);
        })
        .catch(function (error) {
            console.log('Error al registrar el Service Worker:', error);
        });
}


function miFuncion() {
    console.log('Hola desde la función en el hilo principal');
}

// Crea el Worker
const worker = new Worker('../sw.js');

// Envía la función al Worker
worker.postMessage({ type: 'function', payload: miFuncion.toString() });
