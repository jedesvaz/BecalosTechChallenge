// Vite para Crear Proyectos de Node.js
 
// Vite (francés: "rápido") es un entorno de desarrollo y empaquetado de código
// para proyectos web modernos
// Creado por Evan You, el mismo desarrollador de Vue.js
// Alternativa más veloz y eficiente a herramientas tradicionales como Webpack
 
// -------------------------------------------------------
// VENTAJAS DE VITE
//     -Arranque rápido: usa ES Modules para evitar empaquetado completo en desarrollo
//     -Hot Module Replacement (HMR): actualiza módulos instantáneamente sin recargar
//      toda la aplicación
//     -Optimización para producción: usa Rollup internamente para generar código optimizado
//     -Soporte para múltiples frameworks: Vue, React, Svelte y otros
 
// -------------------------------------------------------
// INSTALACIÓN Y CONFIGURACIÓN
 
// Verificar que Node.js está instalado:
// node -v
 
// Crear un nuevo proyecto con Vite:
// npm create vite@latest mi-proyecto
 
// Vite pedirá seleccionar un framework (Vue, React, etc.) o Vanilla JavaScript
 
// Navegar al proyecto e iniciar:
// cd mi-proyecto
// npm install
// npm run dev
 
// npm run dev inicia el servidor de desarrollo y proporciona una URL local
// para ver la aplicación en el navegador
 
// -------------------------------------------------------
// ESTRUCTURA DE UN PROYECTO CON VITE
//     -index.html: archivo HTML principal
//     -src/main.js o src/main.ts: punto de entrada de la aplicación
//     -vite.config.js: archivo de configuración de Vite
//     -public/: carpeta con recursos estáticos (imágenes, fuentes)
 
// Ejemplo de main.js:
// import './style.css';
// document.getElementById('app').innerHTML = '<h1>Hola, Vite!</h1>';
 
// -------------------------------------------------------
// USO DE MÓDULOS EN VITE
// Vite usa la sintaxis import/export en lugar de require de Node.js
 
// saludos.js:
// export function saludar(nombre) {
//     return `Hola, ${nombre}!`;
// }
 
// main.js:
// import { saludar } from './saludos.js';
// console.log(saludar('Estudiante'));
 
// Esto facilita la organización del código y mejora la reutilización de funciones
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Aplicaciones web interactivas: tiendas en línea con React o Vue
//     -Paneles de administración: dashboards rápidos y dinámicos
//     -Portafolios personales: sitios estructurados con rendimiento optimizado
//     -Aplicaciones de productividad: listas de tareas, calendarios, notas en línea