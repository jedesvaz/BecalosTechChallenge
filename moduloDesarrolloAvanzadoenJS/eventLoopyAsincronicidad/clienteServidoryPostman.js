// Cliente-Servidor y Postman
 
// La comunicación cliente-servidor es un concepto fundamental en el desarrollo web
// Herramientas como Postman facilitan la construcción y prueba de APIs
 
// -------------------------------------------------------
// ¿QUÉ ES LA COMUNICACIÓN CLIENTE-SERVIDOR?
// Modelo donde un cliente (navegador, app móvil) envía solicitudes a un servidor,
// y este responde con los datos o acciones solicitadas
// Es el corazón de la web moderna y permite que aplicaciones distribuidas interactúen
 
// Flujo básico:
//     1) El cliente envía una solicitud HTTP al servidor
//     2) El servidor procesa la solicitud y devuelve una respuesta
//     3) El cliente recibe y maneja la respuesta
 
// Ejemplo:
 
// Servidor (Node.js con Express):
// const express = require('express');
// const app = express();
 
// app.get('/saludo', (req, res) => {
//     res.send('¡Hola desde el servidor!');
// });
 
// app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
 
// Cliente (Fetch API):
// fetch('http://localhost:3000/saludo')
//     .then(response => response.text())
//     .then(data => console.log(data));
 
// Salida: ¡Hola desde el servidor!
 
// -------------------------------------------------------
// HTTP: EL PROTOCOLO DE LA WEB
// Protocolo estándar para la comunicación en la web
// Métodos HTTP comunes:
//     -GET: obtener datos del servidor
//     -POST: enviar datos al servidor, sobre todo para crear o actualizar un recurso
//     -PUT: actualizar datos en el servidor
//     -DELETE: eliminar datos del servidor
 
// Ejemplo de GET:
// fetch('https://api.example.com/datos')
//     .then(response => response.json())
//     .then(data => console.log(data));
 
// -------------------------------------------------------
// INTRODUCCIÓN A POSTMAN
// Herramienta gráfica para probar y documentar APIs sin escribir código
// Permite enviar solicitudes a un servidor y analizar las respuestas directamente
 
// Características principales:
//     1) Enviar solicitudes HTTP (GET, POST, PUT, DELETE, etc.)
//     2) Personalizar encabezados y cuerpos de solicitudes
//     3) Guardar y organizar colecciones de solicitudes para pruebas repetidas
//     4) Inspeccionar las respuestas para depurar errores
 
// Uso básico:
//     1) Descarga e instala Postman
//     2) Crea una nueva solicitud y selecciona el método (ej. GET)
//     3) Ingresa la URL del servidor
//     4) Click en "Send" para enviar la solicitud
//     5) Observa la respuesta del servidor en la sección inferior
 
// -------------------------------------------------------
// ENVÍO DE DATOS EN EL CUERPO DE UNA SOLICITUD POST
// Postman permite enviar distintos tipos de datos en el body, según lo que requiera el servidor:
//     -Texto plano: para datos simples o cadenas
//     -JSON: muy usado en APIs modernas para datos estructurados
//     -form-data: útil para enviar archivos o datos de formularios web
//     -x-www-form-urlencoded: similar a form-data pero codificado en una sola línea
 
// El formato se selecciona en la pestaña "Body" al configurar la solicitud
// Ejemplo de JSON en el body:
// {
//     "nombre": "Juan",
//     "edad": 25
// }
 
// El servidor procesa estos datos y devuelve una respuesta basada en ellos
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
 
// 1) Pruebas de APIs en desarrollo
//    Verificar que las respuestas del servidor sean correctas antes de conectar un cliente real
 
// 2) Simulación de peticiones desde un cliente
//    Probar peticiones POST con JSON para verificar que el servidor maneja bien las entradas
//    {
//        "nombre": "Luis",
//        "edad": 33
//    }
 
// 3) Automatización de pruebas
//    Crear colecciones de solicitudes para asegurar que los endpoints funcionen tras cambios
 
// 4) Resolución de problemas
//    Ayuda a identificar si una falla está en la solicitud del cliente o en el servidor
 