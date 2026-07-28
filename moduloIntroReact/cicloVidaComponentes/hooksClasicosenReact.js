// Hooks Clásicos en React
// Documentación oficial: https://react.dev/docs/hooks-intro
 
// Los Hooks son funciones especiales que permiten usar características de React
// (estado, ciclo de vida, contexto) desde componentes funcionales
// Introducidos en React 16.8 — antes solo disponibles en componentes de clase
// Ventajas: código más reutilizable, legible y fácil de mantener
 
// -------------------------------------------------------
// useState
// Agrega estado a componentes funcionales
// Almacena y actualiza datos que afectan cómo se renderiza el componente
 
// import React, { useState } from 'react';
 
// function MyComponent() {
//     const [count, setCount] = useState(0);
//     // useState(0) → valor inicial 0
//     // devuelve [valorActual, funcionParaActualizar]
 
//     return (
//         <div>
//             <p>Contador: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//         </div>
//     );
// }
 
// Caso de uso: manejar texto de un input, estado de un botón, visibilidad de un elemento
 
// -------------------------------------------------------
// useEffect
// Realiza efectos secundarios en componentes funcionales
// Efectos secundarios: acciones no directamente relacionadas con renderizar el componente
// (solicitudes de datos, suscripciones a eventos, manipulación del DOM)
 
// import React, { useState, useEffect } from 'react';
 
// function MyComponent() {
//     const [count, setCount] = useState(0);
 
//     useEffect(() => {
//         console.log('El componente se ha renderizado');
//     }, [count]); // se ejecuta solo cuando "count" cambia
 
//     return (
//         <div>
//             <p>Contador: {count}</p>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//         </div>
//     );
// }
 
// Caso de uso: fetch a un servidor, suscribirse a eventos del navegador,
// manipular el DOM
 
// -------------------------------------------------------
// useContext
// Permite acceder al contexto de React desde componentes funcionales
// El contexto comparte datos entre componentes sin pasar props manualmente
// a través de toda la jerarquía de componentes
 
// import React, { useContext } from 'react';
 
// const MyContext = React.createContext();
 
// function MyComponent() {
//     const value = useContext(MyContext);
 
//     return (
//         <div>
//             <p>Valor del contexto: {value}</p>
//         </div>
//     );
// }
 
// Caso de uso: compartir información del usuario autenticado, configuración
// de la app, tema visual (modo claro/oscuro)
 
// -------------------------------------------------------
// RESUMEN RÁPIDO
 
// useState   → maneja estado interno del componente
// useEffect  → ejecuta código después del renderizado (efectos secundarios)
// useContext → accede a datos compartidos sin pasar props manualmente