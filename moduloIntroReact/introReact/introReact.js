// Introducción a React
 
// React es una biblioteca de JavaScript desarrollada por Facebook para construir
// interfaces de usuario interactivas y eficientes
// Se basa en componentes reutilizables que facilitan apps escalables y mantenibles
// Usa el "Virtual DOM" para minimizar cambios en el DOM real y mejorar el rendimiento
 
// Ejemplo básico:
// import React from 'react';
 
// function Saludo() {
//     return <h1>¡Hola, mundo!</h1>;
// }
 
// export default Saludo;
 
// -------------------------------------------------------
// CREAR UN PROYECTO DE REACT CON VITE
 
// 1) Crear el proyecto:
// npm create vite@latest mi-proyecto-react --template react
 
// 2) Instalar dependencias:
// cd mi-proyecto-react
// npm install
 
// 3) Ejecutar el proyecto:
// npm run dev
// La app estará disponible en http://localhost:5173/
 
// -------------------------------------------------------
// COMPONENTES EN REACT
// Son la base de React — funciones de JavaScript que devuelven JSX
// para ser mostrado en la interfaz
 
// Dos tipos principales:
//     -Componentes funcionales (los más usados actualmente)
//     -Componentes de clase (en desuso, reemplazados por funcionales con Hooks)
 
// Ejemplo de componente funcional:
// function Boton() {
//     return <button>Haz clic aquí</button>;
// }
 
// -------------------------------------------------------
// JSX: JAVASCRIPT XML
// Extensión de JavaScript que permite escribir código similar a HTML dentro de React
// JSX es transformado internamente en llamadas a React.createElement()
 
// Ejemplo:
// const mensaje = <h1>Bienvenido a React</h1>;
 
// Se pueden usar variables y expresiones dentro de JSX con {}:
// const nombre = "Carlos";
// const saludo = <h1>Hola, {nombre}!</h1>;
 
// -------------------------------------------------------
// ESTADOS Y PROPS
// Permiten manejar datos en React
 
// Props: datos que se pasan de un componente padre a un hijo
// function Usuario(props) {
//     return <h1>Hola, {props.nombre}!</h1>;
// }
// <Usuario nombre="Ana" />
 
// State: objeto interno del componente que almacena información que puede cambiar
// import { useState } from 'react';
 
// function Contador() {
//     const [contador, setContador] = useState(0);
 
//     return (
//         <div>
//             <p>Valor: {contador}</p>
//             <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//         </div>
//     );
// }
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Redes sociales: Facebook, Instagram y Twitter usan React en sus interfaces
//     -Comercio electrónico: Amazon y Mercado Libre mejoran la experiencia del usuario con React
//     -Sistemas de gestión: Trello y Asana usan React para organizar tareas
//     -Sitios personales: blogs, portafolios y páginas personales