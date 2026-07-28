// Introducción a Props en React
// Recurso oficial: https://react.dev/learn
 
// Las props (properties) son la forma en que los componentes reciben datos
// desde un componente padre
// Hacen a los componentes reutilizables y dinámicos
// Son INMUTABLES — un componente no puede modificar sus propias props,
// solo el padre puede cambiarlas pasando nuevos valores
 
// -------------------------------------------------------
// EJEMPLO BÁSICO
 
// Mensaje.jsx:
// function Mensaje(props) {
//     return <h2>{props.texto}</h2>;
// }
 
// export default Mensaje;
 
// App.jsx:
// import Mensaje from './Mensaje';
 
// function App() {
//     return (
//         <div>
//             <h1>Ejemplo de Props en React</h1>
//             <Mensaje texto="¡Hola, mundo!" />
//             <Mensaje texto="Bienvenido a React" />
//         </div>
//     );
// }
 
// export default App;
 
// Cada instancia de Mensaje recibe un valor distinto para "texto"
// y renderiza un mensaje diferente — eso es reutilización
 
// -------------------------------------------------------
// PROPS CON MÚLTIPLES VALORES
 
// TarjetaUsuario.jsx:
// function TarjetaUsuario(props) {
//     return (
//         <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
//             <h2>{props.nombre}</h2>
//             <p>Edad: {props.edad}</p>
//             <p>Ocupación: {props.ocupacion}</p>
//         </div>
//     );
// }
 
// export default TarjetaUsuario;
 
// App.jsx:
// import TarjetaUsuario from './TarjetaUsuario';
 
// function App() {
//     return (
//         <div>
//             <h1>Usuarios</h1>
//             <TarjetaUsuario nombre="Ana Pérez" edad={28} ocupacion="Ingeniera de Software" />
//             <TarjetaUsuario nombre="Carlos Gómez" edad={35} ocupacion="Diseñador UX" />
//         </div>
//     );
// }
 
// export default App;
 
// -------------------------------------------------------
// ESTILOS EN LÍNEA EN REACT
// En React los estilos se definen como un objeto de JavaScript, no como string
// Las propiedades se escriben en camelCase
 
// HTML tradicional:         React:
// border: 1px solid #ccc   border: '1px solid #ccc'
// padding: 10px            padding: '10px'
// margin: 10px             margin: '10px'
 
// Esto permite usar variables y lógica de JavaScript dentro de los estilos