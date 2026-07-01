// Introducción a Fetch en JavaScript

// fetch es una herramienta fundamental para realizar solicitudes HTTP de manera sencilla
// Se usa para obtener recursos de servidores, como archivos JSON, HTML o imágenes
// Ampliamente usado para interactuar con APIs y manejar datos externos

// -------------------------------------------------------
// ¿QUÉ ES EL MÉTODO FETCH?
// Función integrada en JavaScript que realiza solicitudes HTTP de forma asíncrona
// Alternativa moderna a XMLHttpRequest, más intuitiva y fácil de usar
// Devuelve una Promise, por lo que se puede manejar con .then()/.catch() o con async/await

// Ejemplo:
// fetch('https://api.example.com/data')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error:', error));

// Si la solicitud es exitosa, se procesa la respuesta como JSON y se imprime
// Si ocurre un error, se captura en el catch

// -------------------------------------------------------
// CARACTERÍSTICAS PRINCIPALES

// 1) Devuelve Promesas
// fetch devuelve una promesa que se resuelve cuando la solicitud completa su curso

// fetch('https://api.example.com')
//     .then(response => console.log('Solicitud exitosa'))
//     .catch(error => console.error('Hubo un problema:', error));

// 2) Soporte para diferentes tipos de solicitudes
// Permite GET, POST, PUT, DELETE, entre otras - versátil para APIs RESTful

// fetch('https://api.example.com/addData', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ nombre: 'Juan', edad: 30 })
// })
//     .then(response => response.json())
//     .then(data => console.log('Data enviada:', data))
//     .catch(error => console.error('Error:', error));

// 3) Manejo de errores
// fetch no lanza errores automáticamente con códigos de estado como 404 o 500
// Hay que verificar manualmente "response.ok"

// fetch('https://api.example.com/data')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Error en la solicitud:', error));

// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL

// 1) Consultar APIs de clima
// fetch('https://api.weatherapi.com/v1/current.json?key=tuClave&q=Mexico')
//     .then(response => response.json())
//     .then(data => console.log('Clima actual:', data))
//     .catch(error => console.error('Error al obtener el clima:', error));

// 2) Formulario de contacto
// fetch('https://api.example.com/contact', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({
//         nombre: 'Ana',
//         mensaje: 'Hola, me interesa su servicio'
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log('Formulario enviado:', data))
//     .catch(error => console.error('Error al enviar el formulario:', error));

// 3) Galería dinámica
// Cargar imágenes desde una API para mostrarlas en una página web

// fetch('https://api.unsplash.com/photos?client_id=tuClave')
//     .then(response => response.json())
//     .then(images => {
//         images.forEach(image => {
//             const img = document.createElement('img');
//             img.src = image.urls.small;
//             document.body.appendChild(img);
//         });
//     })
//     .catch(error => console.error('Error al cargar imágenes:', error));



// EJEMPLOS PARA PROBAR FETCH
// Descomenta un ejemplo a la vez y corre con: node pruebasFetch.js
// Nota: en Node.js moderno (18+) fetch ya está disponible sin instalar nada extra
 
// -------------------------------------------------------
// EJEMPLO 1: GET básico
// Usa JSONPlaceholder, una API gratuita para pruebas
 
// fetch('https://jsonplaceholder.typicode.com/users/2')
//     .then(response => response.json())
//     .then(data => console.log(data));
// fetch('https://jsonplaceholder.typicode.com/users/3')
//     .then(response => response.json())
//     .then(data => console.log(data));
 
// Salida esperada: un objeto con datos de un usuario falso (nombre, email, dirección, etc.)
 
 
// -------------------------------------------------------
// EJEMPLO 2: GET de una lista completa
 
// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => {
//         console.log(`Se encontraron ${data.length} posts`);
//         console.log(data[0]); // muestra solo el primero
//     });
 
 
// -------------------------------------------------------
// EJEMPLO 3: GET con async/await (forma moderna)
 
// async function obtenerUsuario() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/2');
//     const data = await response.json();
//     console.log(data);
// }
 
// obtenerUsuario();
 
 
// -------------------------------------------------------
// EJEMPLO 4: POST enviando datos
 
// fetch('https://jsonplaceholder.typicode.com/posts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({
//         title: 'Mi primer post',
//         body: 'Contenido de prueba',
//         userId: 1
//     })
// })
//     .then(response => response.json())
//     .then(data => console.log('Creado:', data));
 
// Nota: esta API no guarda datos de verdad, pero simula la respuesta como si lo hiciera
 
 
// -------------------------------------------------------
// EJEMPLO 5: Manejo de errores con una URL que no existe
 
// fetch('https://jsonplaceholder.typicode.com/noexiste')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error(`Error HTTP: ${response.status}`);
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('Algo salió mal:', error.message));
 
// Salida esperada: "Algo salió mal: Error HTTP: 404"
 
 
// -------------------------------------------------------
// EJEMPLO 6: Varias peticiones en paralelo con Promise.all
 
// async function obtenerVariosUsuarios() {
//     const ids = [1, 2, 3];
 
//     const promesas = ids.map(id =>
//         fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json())
//     );
 
//     const usuarios = await Promise.all(promesas);
//     usuarios.forEach(usuario => console.log(usuario.name));
// }
 
// obtenerVariosUsuarios();