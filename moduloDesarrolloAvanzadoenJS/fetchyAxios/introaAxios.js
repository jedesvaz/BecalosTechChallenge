// Introducción a Axios
 
// Axios es una biblioteca popular de JavaScript para realizar solicitudes HTTP
// de manera simple y eficiente
// A diferencia de fetch, ofrece configuración automática de cabeceras,
// manejo de timeouts y transformación de datos
 
// -------------------------------------------------------
// ¿QUÉ ES AXIOS?
// Biblioteca basada en promesas para interactuar con servidores web
// Funciona tanto en el navegador como en Node.js
 
// Ventajas:
//     -Soporte para solicitudes asíncronas
//     -Transformación automática de JSON
//     -Configuración de cabeceras HTTP personalizada
//     -Manejo de errores mejorado
//     -Compatible con navegadores antiguos
 
// Ejemplo:
// axios.get('https://api.example.com/data')
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error('Error al obtener datos:', error);
//     });
 
// -------------------------------------------------------
// INSTALACIÓN
 
// Con npm (Node.js o proyectos con bundler):
// npm install axios
 
// Con CDN (navegador, sin instalar nada):
// <script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
 
// -------------------------------------------------------
// SOLICITUDES HTTP
 
// GET: obtener datos
// axios.get('https://api.example.com/users')
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error));
 
// POST: enviar datos al servidor (ej. registrar un nuevo usuario)
// axios.post('https://api.example.com/users', {
//     name: 'John Doe',
//     email: 'john.doe@example.com'
// })
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error));
 
// -------------------------------------------------------
// CONFIGURACIÓN AVANZADA
 
// Configuración global (aplica a todas las solicitudes)
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = 'Bearer token';
 
// Timeout por solicitud (corta la solicitud si tarda más de X milisegundos)
// axios.get('https://api.example.com/data', { timeout: 5000 })
//     .then(response => console.log(response.data))
//     .catch(error => console.error('Timeout:', error));
 
// -------------------------------------------------------
// MANEJO DE ERRORES
// Axios diferencia entre tres tipos de errores:
//     -error.response: el servidor respondió con un código de error (4xx, 5xx)
//     -error.request: la solicitud se hizo pero no hubo respuesta del servidor
//     -error.message: hubo un problema al configurar la solicitud
 
// axios.get('https://api.example.com/data')
//     .then(response => console.log(response.data))
//     .catch(error => {
//         if (error.response) {
//             console.error('Error del servidor:', error.response.status);
//         } else if (error.request) {
//             console.error('No hubo respuesta del servidor:', error.request);
//         } else {
//             console.error('Error al configurar la solicitud:', error.message);
//         }
//     });
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
 
// 1) Consumo de APIs de clima
// axios.get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=tu_api_key')
//     .then(response => console.log(response.data))
//     .catch(error => console.error(error));
 
// 2) Envío de formularios
// axios.post('https://api.example.com/contact', {
//     name: 'Jane Doe',
//     message: 'Hola, me interesa su producto.'
// })
//     .then(response => console.log('Mensaje enviado:', response.data))
//     .catch(error => console.error(error));
 
// 3) Aplicaciones en tiempo real
// Axios puede integrarse con servidores para obtener datos en tiempo real,
// como sistemas de seguimiento de entregas



// EJEMPLOS PARA PROBAR AXIOS
// Primero instala axios: npm install axios
// Descomenta un ejemplo a la vez y corre con: node pruebasAxios.js
 
const axios = require('axios');
 
// -------------------------------------------------------
// EJEMPLO 1: GET básico
// Usa JSONPlaceholder, una API gratuita para pruebas
 
// axios.get('https://jsonplaceholder.typicode.com/users/1')
//     .then(response => console.log(response.data));
 
// Salida esperada: un objeto con datos de un usuario falso (nombre, email, dirección, etc.)
// A diferencia de fetch, no necesitas llamar .json() — axios ya lo convierte automáticamente
 
 
// -------------------------------------------------------
// EJEMPLO 2: GET de una lista completa
 
// axios.get('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         console.log(`Se encontraron ${response.data.length} posts`);
//         console.log(response.data[0]); // muestra solo el primero
//     });
 
 
// -------------------------------------------------------
// EJEMPLO 3: GET con async/await (forma moderna)
 
// async function obtenerUsuario() {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/users/2');
//     console.log(response.data);
// }
 
// obtenerUsuario();
 
 
// -------------------------------------------------------
// EJEMPLO 4: POST enviando datos
 
// axios.post('https://jsonplaceholder.typicode.com/posts', {
//     title: 'Mi primer post',
//     body: 'Contenido de prueba',
//     userId: 1
// })
//     .then(response => console.log('Creado:', response.data));
 
// Nota: no necesitas JSON.stringify() ni definir headers manualmente —
// axios los configura automáticamente cuando le pasas un objeto
 
 
// -------------------------------------------------------
// EJEMPLO 5: Manejo de errores con una URL que no existe
 
// axios.get('https://jsonplaceholder.typicode.com/noexiste')
//     .then(response => console.log(response.data))
//     .catch(error => {
//         if (error.response) {
//             console.error(`Error del servidor: ${error.response.status}`);
//         } else if (error.request) {
//             console.error('No hubo respuesta del servidor');
//         } else {
//             console.error('Error al configurar la solicitud:', error.message);
//         }
//     });
 
// Salida esperada: "Error del servidor: 404"
// A diferencia de fetch, axios lanza el error automáticamente sin necesitar
// verificar response.ok manualmente
 
 
// -------------------------------------------------------
// EJEMPLO 6: Varias peticiones en paralelo con Promise.all
 
// async function obtenerVariosUsuarios() {
//     const ids = [1, 2, 3];
 
//     const promesas = ids.map(id =>
//         axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
//     );
 
//     const respuestas = await Promise.all(promesas);
//     respuestas.forEach(response => console.log(response.data.name));
// }
 
// obtenerVariosUsuarios();