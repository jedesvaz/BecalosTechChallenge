//Ejemplo de Event Loop 
console.log('Inicio');

setTimeout(() => {
  console.log('Tarea asincrónica completada');
}, 2000);

console.log('Fin');

//Ejemplo de asincronidad
function saludar(nombre, callback) {
    console.log(`Hola, ${nombre}`);
    callback();
}

saludar('María', () => {
    console.log('Callback ejecutado.'); //todo esto es una función callback, está reemplazando el callback con una función anónima, que se ejecutará después de que se ejecute la función saludar
});

//Ejemplo de promesa
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Promesa cumplida'), 2000);
});

promesa.then(resultado => console.log(resultado));

//Ejemplo de async/await
async function obtenerDatos() {
    const respuesta = await fetch('https://api.example.com/data');
    const datos = await respuesta.json();
    console.log(datos);
}

obtenerDatos();

// Event Loop y Asincronicidad

// La asincronicidad junto con el Event Loop permiten que JavaScript sea eficiente y maneje
// tareas complejas sin bloquear la ejecución de código

// -------------------------------------------------------
// ¿QUÉ ES EL EVENT LOOP?
// Mecanismo que permite a JavaScript realizar operaciones no bloqueantes a pesar de ser
// un lenguaje de un solo hilo. JavaScript solo ejecuta una tarea a la vez, pero puede manejar
// múltiples operaciones asincrónicas delegando tareas al navegador o al entorno de ejecución (Node.js)

// Cómo funciona:
//     1) El Call Stack almacena las funciones que se están ejecutando, sigue el principio
//        "último en entrar, primero en salir" (LIFO)
//     2) Las operaciones asincrónicas (setTimeout, peticiones HTTP) se delegan a APIs externas
//     3) Una vez completadas, las tareas asincrónicas colocan su resultado en la Task Queue
//     4) El Event Loop revisa constantemente si el Call Stack está vacío y, de ser así,
//        mueve las tareas pendientes de la Task Queue al Call Stack para ejecutarlas

// Ejemplo:

// console.log('Inicio');

// setTimeout(() => {
//     console.log('Tarea asincrónica completada');
// }, 2000);

// console.log('Fin');

// Salida:
// Inicio
// Fin
// Tarea asincrónica completada

// La tarea asincrónica no bloquea la ejecución de las demás instrucciones

// -------------------------------------------------------
// ASINCRONICIDAD EN JAVASCRIPT
// Capacidad de ejecutar tareas que se completan en el futuro sin detener el flujo del programa
// Crucial para manejar eventos como clicks, peticiones HTTP y temporizadores

// Mecanismos comunes:

// 1) Callbacks: funciones que se pasan como argumento a otras funciones y se ejecutan
//    después de que una tarea se completa

// function saludar(nombre, callback) {
//     console.log(`Hola, ${nombre}`);
//     callback();
// }

// saludar('María', () => {
//     console.log('Callback ejecutado.');
// });

// 2) Promises: manejan tareas asincrónicas de forma más limpia
//    Una Promise puede estar en tres estados: pendiente, resuelta o rechazada

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('Promesa cumplida'), 1000);
// });

// promesa.then(resultado => console.log(resultado));

// 3) Async/Await: introducido en ES8, permite escribir código asincrónico que parece sincrónico

// async function obtenerDatos() {
//     const respuesta = await fetch('https://api.example.com/data');
//     const datos = await respuesta.json();
//     console.log(datos);
// }

// obtenerDatos();

// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL

// 1) Interacciones con el usuario
// button.addEventListener('click', () => {
//     console.log('Botón presionado');
// });

// 2) Peticiones HTTP
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data));

// 3) Temporizadores
// setTimeout(() => {
//     console.log('Esto se ejecuta después de 3 segundos');
// }, 3000);

// 4) Animaciones
// let position = 0;
// function moverCaja() {
//     position += 1;
//     caja.style.left = position + 'px';
//     if (position < 100) {
//         requestAnimationFrame(moverCaja);
//     }
// }
// moverCaja();