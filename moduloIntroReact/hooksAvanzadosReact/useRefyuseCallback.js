// Hooks Avanzados: useRef y useCallback
 
// Hooks que optimizan el rendimiento y gestionan referencias
// sin causar renders innecesarios
 
// -------------------------------------------------------
// useRef
// Mantiene referencias a valores que persisten entre renders
// SIN causar una nueva renderización al actualizarse
 
// Características:
//     -No dispara renders al actualizarse (diferencia clave con useState)
//     -Puede referenciar elementos del DOM directamente
//     -Se mantiene persistente entre renders
 
// Sintaxis básica — enfocar un input al montar:
// import { useRef, useEffect } from 'react';
 
// function InputFocus() {
//     const inputRef = useRef(null);
 
//     useEffect(() => {
//         inputRef.current.focus(); // accede al elemento del DOM
//     }, []);
 
//     return <input ref={inputRef} placeholder="Escribe aquí..." />;
// }
 
// Almacenar valores sin re-render:
// import { useRef, useState } from 'react';
 
// function Contador() {
//     const renderCount = useRef(0);
//     const [count, setCount] = useState(0);
 
//     renderCount.current += 1; // se actualiza sin causar re-render
 
//     return (
//         <div>
//             <p>Contador: {count}</p>
//             <p>Renderizado: {renderCount.current} veces</p>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//         </div>
//     );
// }
 
// Manejo de temporizadores:
// function Temporizador() {
//     const timerRef = useRef(null);
 
//     const iniciarTemporizador = () => {
//         timerRef.current = setTimeout(() => {
//             alert('Tiempo agotado!');
//         }, 3000);
//     };
 
//     const cancelarTemporizador = () => {
//         clearTimeout(timerRef.current);
//     };
 
//     return (
//         <div>
//             <button onClick={iniciarTemporizador}>Iniciar</button>
//             <button onClick={cancelarTemporizador}>Cancelar</button>
//         </div>
//     );
// }
 
// -------------------------------------------------------
// useCallback
// Memoriza funciones y evita su recreación en cada render
// Útil cuando se pasan funciones como props a componentes hijos
 
// Características:
//     -Devuelve la misma función memorizada si sus dependencias no cambian
//     -Ayuda a evitar renders innecesarios en componentes hijos
 
// Sintaxis básica:
// import { useCallback, useState } from 'react';
 
// function ContadorConCallback() {
//     const [count, setCount] = useState(0);
 
//     const incrementar = useCallback(() => {
//         setCount(prev => prev + 1);
//     }, []); // [] = la función nunca se recrea
 
//     return (
//         <div>
//             <p>Contador: {count}</p>
//             <button onClick={incrementar}>Incrementar</button>
//         </div>
//     );
// }
 
// Evitar renders innecesarios en componentes hijos:
// function Padre() {
//     const [count, setCount] = useState(0);
 
//     const handleClick = useCallback(() => {
//         console.log('Click en el botón');
//     }, []); // handleClick no se recrea en cada render del Padre
 
//     return (
//         <div>
//             <button onClick={() => setCount(count + 1)}>Incrementar</button>
//             <Hijo onClick={handleClick} /> // Hijo solo se re-renderiza si handleClick cambia
//         </div>
//     );
// }
 
// -------------------------------------------------------
// DIFERENCIA CLAVE ENTRE useRef, useState y useCallback
 
// useState   → almacena valores, dispara re-render al cambiar
// useRef     → almacena valores o referencias al DOM, NO dispara re-render
// useCallback → memoriza funciones, evita recrearlas en cada render
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -useRef: acceder y modificar elementos del DOM sin usar estado
//     -useRef: gestionar setTimeout o setInterval sin re-renders
//     -useCallback: optimizar listas grandes evitando recreación de funciones
//     -useCallback: optimizar rendimiento junto con React.memo()