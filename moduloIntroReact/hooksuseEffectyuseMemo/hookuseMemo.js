// Hook useMemo en React
// Documentación oficial: https://react.dev/reference/react/useMemo
 
// useMemo memoriza (guarda) el resultado de un cálculo costoso y evita que
// se recalcule innecesariamente en cada renderizado
// Solo vuelve a calcular cuando sus dependencias cambian
 
// -------------------------------------------------------
// ¿POR QUÉ ES ÚTIL?
// React ejecuta todo el código de un componente en cada renderizado
// Si hay cálculos costosos, se repiten aunque el resultado no haya cambiado
// useMemo guarda el resultado y lo reutiliza si las dependencias no cambiaron
 
// -------------------------------------------------------
// SINTAXIS BÁSICA
 
// const valorMemorizado = useMemo(() => {
//     // cálculo costoso
//     return valor;
// }, [dependencias]);
 
// Si las dependencias no cambian → React usa el valor memorizado
// Si alguna dependencia cambia → React recalcula
 
// -------------------------------------------------------
// EJEMPLO BÁSICO
 
// import React, { useMemo, useState } from 'react';
 
// function ExpensiveCalculationComponent() {
//     const [input, setInput] = useState(0);
 
//     const expensiveCalculation = (num) => {
//         let result = 0;
//         for (let i = 0; i < 1000000000; i++) {
//             result += num * i;
//         }
//         return result;
//     };
 
//     // Solo recalcula cuando "input" cambia
//     const memoizedResult = useMemo(() => expensiveCalculation(input), [input]);
 
//     return (
//         <div>
//             <input
//                 type="number"
//                 value={input}
//                 onChange={(e) => setInput(parseInt(e.target.value))}
//             />
//             <p>Resultado memorizado: {memoizedResult}</p>
//         </div>
//     );
// }
 
// -------------------------------------------------------
// CASOS DE USO COMUNES
 
// 1) Filtrar listas grandes
// const filteredList = useMemo(() => {
//     return items.filter(item => item.active);
// }, [items]); // solo recalcula cuando "items" cambia
 
// 2) Mantener referencias estables de objetos o arrays
// (evita re-renders innecesarios en componentes hijos)
// const memoizedObject = useMemo(() => ({ value: expensiveComputation() }), []);
 
// 3) Evitar recalculaciones de funciones costosas que dependen de valores dinámicos
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Filtros en tiendas en línea: evitar procesar miles de productos en cada cambio
//     -Juegos de navegador: recalcular posiciones de objetos solo cuando sea necesario
//     -Tablas con datos masivos: memorizar estadísticas o resúmenes costosos
 
// -------------------------------------------------------
// CUÁNDO NO USAR useMemo
// No siempre es necesario — si el cálculo es simple o las actualizaciones son
// infrecuentes, useMemo agrega complejidad sin mejora real de rendimiento
// Úsalo con criterio, solo cuando el cálculo sea genuinamente costoso