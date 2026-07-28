// Hook useEffect en React
// Documentación oficial: https://react.dev/reference/react/useEffect
 
// useEffect permite ejecutar efectos secundarios en componentes funcionales
// Antes de los Hooks, esto se hacía en métodos del ciclo de vida de clases:
//     componentDidMount, componentDidUpdate, componentWillUnmount
// useEffect reemplaza los tres en un solo Hook
 
// Efectos secundarios son acciones que ocurren después de la renderización:
//     -Llamadas a APIs para obtener datos
//     -Modificar el DOM manualmente
//     -Configurar y limpiar suscripciones a eventos
 
// -------------------------------------------------------
// SINTAXIS BÁSICA
 
// import { useEffect } from "react";
 
// useEffect(() => {
//     // código a ejecutar
// });
 
// -------------------------------------------------------
// DEPENDENCIAS EN useEffect
// El segundo argumento controla CUÁNDO se ejecuta el efecto
 
// 1) Sin segundo argumento → se ejecuta en CADA renderizado
// useEffect(() => {
//     console.log("Se ejecuta en cada renderizado");
// });
 
// 2) Array vacío [] → se ejecuta solo UNA VEZ al montar el componente
//    (equivalente a componentDidMount)
// useEffect(() => {
//     console.log("Se ejecuta solo una vez");
// }, []);
 
// 3) Con dependencias → se ejecuta cuando cambia el valor indicado
// useEffect(() => {
//     console.log("El contador ha cambiado a:", contador);
// }, [contador]);
 
// -------------------------------------------------------
// LIMPIEZA DE EFECTOS
// Algunos efectos requieren limpieza para evitar fugas de memoria
// useEffect puede devolver una función que se ejecuta antes de que
// el componente se desmonte o antes de ejecutar el efecto nuevamente
 
// useEffect(() => {
//     console.log("Suscribiendo evento");
 
//     return () => {
//         console.log("Limpiando evento"); // se ejecuta al desmontar
//     };
// }, []);
 
// -------------------------------------------------------
// EJEMPLO: OBTENER DATOS DE UNA API
 
// import { useState, useEffect } from "react";
 
// function DatosAPI() {
//     const [datos, setDatos] = useState([]);
 
//     useEffect(() => {
//         fetch("https://jsonplaceholder.typicode.com/posts")
//             .then(response => response.json())
//             .then(data => setDatos(data));
//     }, []); // array vacío = solo se ejecuta al montar
 
//     return (
//         <div>
//             <h2>Datos desde API</h2>
//             <ul>
//                 {datos.map(post => (
//                     <li key={post.id}>{post.title}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }
 
// export default DatosAPI;
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Obtener datos de una API: mostrar información dinámica
//     -Actualizar el título de la página: personalizar la pestaña del navegador
//     -Temporizadores o intervalos: actualizaciones en tiempo real
//     -Escuchar eventos del teclado o mouse: detectar interacciones del usuario
 
// -------------------------------------------------------
// RESUMEN DEL ARRAY DE DEPENDENCIAS
//
// useEffect(() => { ... })          → cada renderizado
// useEffect(() => { ... }, [])      → solo al montar
// useEffect(() => { ... }, [valor]) → cuando "valor" cambia