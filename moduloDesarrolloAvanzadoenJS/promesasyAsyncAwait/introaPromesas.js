// Introducción a las Promesas en JavaScript

// Una promesa es una forma de manejar operaciones asíncronas de manera más sencilla
// y estructurada (solicitudes de red, lectura de archivos, etc.)
// Representa un valor que estará disponible en el futuro, ya sea porque la operación
// se completó correctamente o porque falló

// -------------------------------------------------------
// ESTADOS DE UNA PROMESA
//     1) Pendiente (Pending): la promesa se está ejecutando pero aún no ha terminado
//     2) Cumplida (Fulfilled): la operación se completó con éxito
//     3) Rechazada (Rejected): la operación falló o se produjo un error

// -------------------------------------------------------
// EJEMPLO BÁSICO

// let obtenerDatosDeUsuario = new Promise((resolve, reject) => {
//     let exito = true; // cambia esto para simular éxito o error

//     if (exito) {
//         resolve("Datos de usuario obtenidos correctamente.");
//     } else {
//         reject("Hubo un error al obtener los datos.");
//     }
// });

// obtenerDatosDeUsuario
//     .then((resultado) => {
//         console.log(resultado); // si la promesa es cumplida
//     })
//     .catch((error) => {
//         console.log(error); // si la promesa es rechazada
//     });

// -------------------------------------------------------
// EJERCICIO 1: Simulando una llamada a una API
// Simula una llamada a una API que puede ser exitosa o fallar

// function llamadaApi(success) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (success) {
//                 resolve("Datos obtenidos con éxito de la API.");
//             } else {
//                 reject("Error al obtener los datos de la API.");
//             }
//         }, 2000); // retraso de 2 segundos
//     });
// }

// llamadaApi(true) // simula una llamada exitosa
//     .then(result => console.log(result))  // "Datos obtenidos con éxito de la API."
//     .catch(error => console.error(error));

// llamadaApi(false) // simula una llamada fallida
//     .then(result => console.log(result))
//     .catch(error => console.error(error)); // "Error al obtener los datos de la API."

// Explicación:
// -setTimeout simula el tiempo de espera de una respuesta real de API
// -Si success es true → resolve(); si es false → reject()
// -.then() maneja el éxito, .catch() maneja el error

// -------------------------------------------------------
// EJERCICIO 2: Encadenamiento de Promesas
// Demuestra cómo encadenar promesas para realizar tareas secuenciales

// function registrarUsuario(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (nombre) {
//                 resolve(`Usuario ${nombre} registrado correctamente.`);
//             } else {
//                 reject("El nombre de usuario es obligatorio.");
//             }
//         }, 1000); // retraso de 1 segundo
//     });
// }

// function enviarCorreoBienvenida(nombre) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(`Correo de bienvenida enviado a ${nombre}.`);
//         }, 1500); // retraso de 1.5 segundos
//     });
// }

// registrarUsuario("Juan")
//     .then(result => {
//         console.log(result); // "Usuario Juan registrado correctamente."
//         return enviarCorreoBienvenida("Juan"); // encadena la siguiente promesa
//     })
//     .then(result => {
//         console.log(result); // "Correo de bienvenida enviado a Juan."
//     })
//     .catch(error => {
//         console.error(error); // captura errores de cualquier promesa en la cadena
//     });

// Explicación:
// -Cada .then() recibe el resultado de la promesa anterior
// -Si se devuelve una nueva promesa dentro de .then(), la cadena espera a que se resuelva
// -Un solo .catch() al final captura errores de cualquier punto de la cadena