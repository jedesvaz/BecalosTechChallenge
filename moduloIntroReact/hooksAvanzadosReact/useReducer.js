// Hook Avanzado: useReducer en React
 
// useReducer es una alternativa avanzada a useState para gestionar estado complejo
// Se basa en un reducer — similar al patrón Redux pero sin configuración adicional
// Ideal cuando el estado tiene lógica de actualización compleja o múltiples acciones
 
// -------------------------------------------------------
// COMPONENTES DE useReducer
//     1) Estado inicial: el estado antes de cualquier actualización
//     2) Reducer: función pura que recibe el estado y una acción, devuelve el nuevo estado
//        (función pura = mismos inputs siempre producen el mismo output, sin efectos secundarios)
//     3) Dispatch: función que envía acciones al reducer para modificar el estado
 
// -------------------------------------------------------
// SINTAXIS BÁSICA
 
// import { useReducer } from 'react';
 
// function reducer(state, action) {
//     switch (action.type) {
//         case 'increment':
//             return { count: state.count + 1 };
//         case 'decrement':
//             return { count: state.count - 1 };
//         default:
//             return state;
//     }
// }
 
// function Contador() {
//     const [state, dispatch] = useReducer(reducer, { count: 0 });
//     //          ^      ^                    ^          ^
//     //       estado  función             función    estado
//     //       actual  para enviar         reducer    inicial
//     //               acciones
 
//     return (
//         <div>
//             <p>Contador: {state.count}</p>
//             <button onClick={() => dispatch({ type: 'increment' })}>+</button>
//             <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
//         </div>
//     );
// }
 
// -------------------------------------------------------
// EJEMPLO: FORMULARIO CON useReducer
 
// const initialState = { nombre: '', email: '' };
 
// function formReducer(state, action) {
//     return { ...state, [action.field]: action.value };
//     // spread operator conserva los demás campos y solo actualiza el que cambió
// }
 
// function Formulario() {
//     const [state, dispatch] = useReducer(formReducer, initialState);
 
//     return (
//         <form>
//             <input
//                 type="text"
//                 value={state.nombre}
//                 onChange={(e) => dispatch({ field: 'nombre', value: e.target.value })}
//                 placeholder="Nombre"
//             />
//             <input
//                 type="email"
//                 value={state.email}
//                 onChange={(e) => dispatch({ field: 'email', value: e.target.value })}
//                 placeholder="Email"
//             />
//         </form>
//     );
// }
 
// -------------------------------------------------------
// CUÁNDO USAR useReducer EN LUGAR DE useState
 
//     1) Lógica de actualización compleja: el estado depende de varias condiciones
//     2) Estado que depende del estado anterior: evita problemas de estados obsoletos
//     3) Múltiples acciones: incrementar, decrementar, resetear, etc.
//     4) Facilidad de testeo: las funciones puras son más fáciles de probar
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Formularios grandes: gestionar múltiples campos de forma organizada
//     -Autenticación: estados "cargando", "autenticado", "error"
//     -Carritos de compra: acciones "agregar", "eliminar", "vaciar"
//     -Sistemas de navegación: manejo de pestañas o rutas activas