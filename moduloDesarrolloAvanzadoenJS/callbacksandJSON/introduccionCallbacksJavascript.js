// Introducción a los Callbacks en JavaScript
 
// Los callbacks son fundamentales para manejar la asincronía y realizar tareas
// después de que otra tarea haya terminado
 
// -------------------------------------------------------
// ¿QUÉ ES UN CALLBACK?
// Una función que se pasa como argumento a otra función y se ejecuta después de que
// esa función principal haya terminado
// Permiten manejar tareas que no se completan de inmediato: lectura de archivos,
// solicitudes de red, temporizadores
 
// Ejemplo:
 
// function saludar(nombre, callback) {
//     console.log(`Hola, ${nombre}!`);
//     callback();
// }
 
// function despedirse() {
//     console.log('Adios!');
// }
 
// saludar('María', despedirse);
 
// Salida:
// Hola, María!
// Adios!
 
// despedirse se pasa como callback y se ejecuta después de que saludar termina
 
// -------------------------------------------------------
// CALLBACKS ASÍNCRONOS
// Muchas operaciones en JavaScript son asincrónicas (leer datos de un servidor, esperar
// un intervalo de tiempo). Los callbacks aseguran que el código no se detenga mientras espera
 
// Ejemplo con setTimeout:
 
// console.log('Inicio');
 
// setTimeout(() => {
//     console.log('Esto sucede después de 2 segundos');
// }, 2000);
 
// console.log('Fin');
 
// Salida:
// Inicio
// Fin
// Esto sucede después de 2 segundos
 
// El callback dentro de setTimeout se ejecuta después de 2 segundos, mientras el resto
// del código sigue ejecutándose sin esperar
 
// -------------------------------------------------------
// ANIDACIÓN DE CALLBACKS Y EL "CALLBACK HELL"
// Cuando se necesitan varias tareas asincrónicas en secuencia, anidar callbacks puede
// llevar a código difícil de leer y mantener: el "callback hell"
 
// Ejemplo:
 
// setTimeout(() => {
//     console.log('Primera tarea completada');
 
//     setTimeout(() => {
//         console.log('Segunda tarea completada');
 
//         setTimeout(() => {
//             console.log('Tercera tarea completada');
//         }, 1000);
 
//     }, 1000);
 
// }, 1000);
 
// Funcional, pero complicado de seguir
// Las Promesas y async/await resuelven este problema, pero los callbacks siguen siendo la base
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
 
// 1) Lectura de archivos
// const fs = require('fs');
 
// fs.readFile('datos.json', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error al leer el archivo:', err);
//         return;
//     }
//     console.log('Datos del archivo:', data);
// });
 
// 2) Solicitudes HTTP
// const https = require('https');
 
// https.get('https://api.example.com/datos', (res) => {
//     let data = '';
 
//     res.on('data', (chunk) => {
//         data += chunk;
//     });
 
//     res.on('end', () => {
//         console.log('Datos recibidos:', data);
//     });
// }).on('error', (err) => {
//     console.error('Error en la solicitud:', err);
// });
 
// 3) Animaciones en interfaces de usuario
// button.addEventListener('click', () => {
//     console.log('Botón clicado!');
// });