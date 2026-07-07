// Introducción a Async/Await

// async y await son palabras clave que hacen que trabajar con código asíncrono
// sea más sencillo y legible
// Son una mejora de las promesas con una sintaxis más cercana a la programación síncrona

// async: declara una función que siempre devolverá una promesa, incluso si no usa
//        promesas directamente — JavaScript la convierte automáticamente
// await: se usa dentro de una función async para esperar a que una promesa se resuelva
//        o rechace antes de continuar. Pausa la función sin bloquear el hilo principal

// -------------------------------------------------------
// ¿CÓMO FUNCIONA ASYNC/AWAIT?
// Principal ventaja: el código asíncrono se ve y se comporta de forma secuencial,
// como si fuera código síncrono
// Elimina la necesidad de encadenar múltiples .then() y .catch()

// Ejemplo:

// function obtenerDatosDeUsuario(id) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (id === 1) {
//                 resolve({ id: 1, nombre: 'Juan' });
//             } else {
//                 reject('Usuario no encontrado');
//             }
//         }, 2000); // retraso de 2 segundos
//     });
// }

// async function mostrarDatosDeUsuario(id) {
//     try {
//         const usuario = await obtenerDatosDeUsuario(id); // espera a que la promesa se resuelva
//         console.log(usuario); // muestra los datos del usuario
//     } catch (error) {
//         console.log(error); // maneja el error si la promesa es rechazada
//     }
// }

// mostrarDatosDeUsuario(1); // { id: 1, nombre: 'Juan' }

// -------------------------------------------------------
// MANEJO DE ERRORES CON try/catch
// En async/await los errores se manejan con try/catch en lugar de .catch()
// Es más limpio y organizado que las promesas tradicionales

// Sintaxis básica:
// async function obtenerDatos() {
//     try {
//         let respuesta = await fetch('https://api.example.com');
//         let datos = await respuesta.json();
//         console.log(datos);
//     } catch (error) {
//         console.log('Error al obtener los datos:', error);
//     }
// }

// try: contiene el código que se ejecuta normalmente, incluyendo las promesas con await
// catch: si alguna promesa dentro de try falla, el error se captura aquí

// Ejemplo con error de red:
// async function obtenerDatos() {
//     try {
//         let respuesta = await fetch('https://api.inexistente.com'); // URL no existe
//         let datos = await respuesta.json(); // esto nunca se ejecuta
//         console.log(datos);
//     } catch (error) {
//         console.log('Hubo un problema:', error); // el error llega aquí
//     }
// }

// Si no se usa try/catch, cualquier fallo en un await haría que la función async
// falle y cierre, propagando el error e interrumpiendo el resto del código

// -------------------------------------------------------
// CASOS DE USO EN LA VIDA REAL
// -Obtener datos de múltiples fuentes en una API (usuarios, publicaciones, comentarios)
//  de forma secuencial o en paralelo sin que el código se vuelva complejo
// -Aplicaciones de gestión de proyectos: cargar tareas desde un servidor y mostrarlas
//  sin interrumpir el flujo de trabajo mientras se descargan los datos