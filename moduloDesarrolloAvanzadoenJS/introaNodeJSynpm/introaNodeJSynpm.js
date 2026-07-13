// Introducción a Node.js y npm
 
// -------------------------------------------------------
// ¿QUÉ ES NODE.JS?
// Entorno de ejecución de JavaScript que permite ejecutar código en el servidor
// A diferencia del JS tradicional que corre en el navegador, Node.js crea aplicaciones
// independientes sin depender de un navegador web
// Creado en 2009 por Ryan Dahl, basado en el motor V8 de Google Chrome
// Usa un modelo de E/S no bloqueante y orientado a eventos — ideal para apps escalables
 
// Verificar versión instalada:
// node -v
 
// -------------------------------------------------------
// ¿QUÉ ES NPM?
// Node Package Manager — gestor de paquetes de Node.js
// Permite instalar, compartir y gestionar bibliotecas y herramientas
 
// -------------------------------------------------------
// ARCHIVO PACKAGE.JSON
// Archivo clave que contiene información del proyecto, dependencias y configuraciones
 
// Crear uno con configuración básica:
// npm init -y
 
// Ejemplo de package.json:
// {
//     "name": "mi-proyecto",
//     "version": "1.0.0",
//     "description": "Un proyecto con Node.js",
//     "main": "index.js",
//     "scripts": {
//         "start": "node index.js"
//     },
//     "dependencies": {
//         "express": "^4.17.1"
//     }
// }
 
// Instalar todas las dependencias listadas en package.json:
// npm install
 
// -------------------------------------------------------
// INSTALACIÓN DE PAQUETES
 
// Instalar un paquete en el proyecto:
// npm install nombre-del-paquete
 
// Ejemplo con Express:
// npm install express
 
// Instalar un paquete de forma global:
// npm install -g nodemon
 
// -------------------------------------------------------
// DEPENDENCIAS DE PRODUCCIÓN VS DESARROLLO
// Producción: necesarias para que la app funcione → se registran en "dependencies"
// npm install express
 
// Desarrollo: herramientas útiles solo durante el desarrollo → se registran en "devDependencies"
// npm install --save-dev nodemon
 
// -------------------------------------------------------
// NOMENCLATURA DE VERSIONES (SemVer: MAJOR.MINOR.PATCH)
// Ejemplo: ^4.17.1 en express significa:
//     4  → cambios mayores (puede haber cambios incompatibles)
//     17 → nuevas funciones, compatible con la versión mayor
//     1  → correcciones de errores menores
 
// Símbolos comunes:
//     ^4.17.1 → permite actualizaciones menores y parches (4.x.x)
//     ~4.17.1 → permite solo actualizaciones de parches (4.17.x)
//     4.17.1  → instala solo esa versión exacta
 
// -------------------------------------------------------
// SCRIPTS EN PACKAGE.JSON
// Permiten definir comandos personalizados ejecutables con npm run
 
// "scripts": {
//     "start": "node index.js",       → npm start
//     "dev": "nodemon index.js",      → npm run dev
//     "test": "jest"                  → npm run test
// }
 
// -------------------------------------------------------
// PRIMER PROGRAMA EN NODE.JS
 
// console.log("Hola, Node.js!");
// Ejecutar con: node app.js
 
// Servidor HTTP básico:
// const http = require('node:http');
// const hostname = '127.0.0.1';
// const port = 3000;
 
// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hola, mundo desde Node.js!\n');
// });
 
// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}/`);
// });
 
// Ejecutar: node helloWorld.js
// Visitar en navegador: http://127.0.0.1:3000/
// Detener el servidor: Ctrl + C
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Aplicaciones en tiempo real: WhatsApp Web, Slack
//     -Automatización de tareas: Gulp, Webpack
//     -Internet de las cosas (IoT): aplicaciones para dispositivos inteligentes
//     -Streaming: Netflix usa Node.js para gestionar transmisiones de contenido
//     -Aplicaciones de uso diario: Uber usa Node.js en sus servidores