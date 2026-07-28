// Functional Components en React
 
// Los Functional Components son funciones de JavaScript que devuelven JSX
// Son la forma más sencilla y moderna de definir componentes en React
// Antes de React 16.8 no podían manejar estado, pero gracias a los Hooks ahora sí pueden
 
// -------------------------------------------------------
// EJEMPLO BÁSICO
 
// function Saludo() {
//     return <h1>¡Hola, mundo!</h1>;
// }
 
// -------------------------------------------------------
// COMPARACIÓN CON CLASS COMPONENTS
 
// Functional Component (moderno):
// function Saludo() {
//     return <h1>¡Hola, mundo!</h1>;
// }
 
// Class Component (en desuso):
// class Saludo extends React.Component {
//     render() {
//         return <h1>¡Hola, mundo!</h1>;
//     }
// }
 
// Diferencias clave:
//     -Sintaxis: los Functional Components son más concisos y fáciles de leer
//     -this: los Class Components requieren "this" para acceder a props; los funcionales no
//     -Hooks: los Functional Components pueden usar useState, useEffect, etc.
//      los Class Components dependen de métodos del ciclo de vida
 
// -------------------------------------------------------
// CREACIÓN DE UN FUNCTIONAL COMPONENT
 
// Mensaje.jsx:
// function Mensaje() {
//     return <p>Este es un mensaje dentro de un Functional Component.</p>;
// }
 
// export default Mensaje;
 
// Uso en App.jsx:
// import Mensaje from './Mensaje';
 
// function App() {
//     return (
//         <div>
//             <h1>Mi Aplicación</h1>
//             <Mensaje />
//         </div>
//     );
// }
 
// export default App;
 
// -------------------------------------------------------
// USO DE PROPS EN FUNCTIONAL COMPONENTS
// Las props hacen a los componentes reutilizables y dinámicos
 
// Tarjeta.jsx:
// function Tarjeta(props) {
//     return (
//         <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <h2>{props.titulo}</h2>
//             <p>{props.descripcion}</p>
//         </div>
//     );
// }
 
// export default Tarjeta;
 
// Uso en App.jsx:
// import Tarjeta from './Tarjeta';
 
// function App() {
//     return (
//         <div>
//             <Tarjeta titulo="React" descripcion="Una biblioteca para construir interfaces de usuario." />
//             <Tarjeta titulo="JavaScript" descripcion="El lenguaje de la web." />
//         </div>
//     );
// }
 
// export default App;