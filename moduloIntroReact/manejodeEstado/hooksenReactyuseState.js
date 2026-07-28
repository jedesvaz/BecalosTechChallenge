// Hooks en React y useState
// Documentación oficial: https://react.dev/reference/react/useState
 
// Los Hooks son funciones especiales que permiten "engancharse" a características
// de React (estado, ciclo de vida) desde componentes funcionales
// Introducidos en React 16.8 — antes el estado solo podía manejarse en clases
// Todos los Hooks empiezan con "use": useState, useEffect, useContext, etc.
 
// -------------------------------------------------------
// HOOKS MÁS COMUNES
//     -useState: maneja el estado en componentes funcionales
//     -useEffect: maneja efectos secundarios (llamadas a APIs, manipulación del DOM)
//     -useContext: comparte datos entre componentes sin pasar props manualmente
//     -useReducer: alternativa a useState para estados más complejos
//     -useRef: referencias al DOM o valores persistentes sin causar re-renders
 
// -------------------------------------------------------
// ¿QUÉ ES useState?
// Permite a los componentes funcionales manejar su propio estado
// Antes de los Hooks, el estado solo existía en clases con this.state y this.setState
 
// Sintaxis básica:
// import { useState } from "react";
 
// function Contador() {
//     const [contador, setContador] = useState(0);
//     //           ^          ^              ^
//     //     valor actual   función       valor
//     //      del estado    para         inicial
//     //                  actualizar
 
//     return (
//         <div>
//             <p>El contador está en: {contador}</p>
//             <button onClick={() => setContador(contador + 1)}>Incrementar</button>
//         </div>
//     );
// }
 
// Cada clic en el botón llama a setContador, actualiza el estado y
// provoca un nuevo renderizado con el valor actualizado
 
// -------------------------------------------------------
// ESTADO CON OBJETOS
// useState también puede manejar objetos y arreglos
 
// import { useState } from "react";
 
// function PerfilUsuario() {
//     const [usuario, setUsuario] = useState({ nombre: "Juan", edad: 25 });
 
//     const actualizarEdad = () => {
//         setUsuario({ ...usuario, edad: usuario.edad + 1 });
//         // el operador spread (...usuario) conserva las demás propiedades
//         // y solo actualiza "edad"
//     };
 
//     return (
//         <div>
//             <p>Nombre: {usuario.nombre}</p>
//             <p>Edad: {usuario.edad}</p>
//             <button onClick={actualizarEdad}>Cumplir años</button>
//         </div>
//     );
// }
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Contador de visitas en una página web
//     -Lista de tareas (To-Do List): gestionar tareas agregadas y eliminadas
//     -Formulario de contacto: manejar datos ingresados y validarlos
//     -Cambio de temas: alternar entre modo claro y oscuro
//     -Juegos simples: controlar puntaje o vidas restantes
 