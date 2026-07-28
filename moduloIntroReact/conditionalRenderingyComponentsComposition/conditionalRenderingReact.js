// Conditional Rendering en React
 
// El renderizado condicional permite mostrar o esconder componentes
// según ciertas condiciones
// Permite modificar la interfaz dinámicamente en respuesta a eventos o estados
 
// -------------------------------------------------------
// 1) IF / ELSE — la forma más básica
 
// function WelcomeMessage({ isLoggedIn }) {
//     if (isLoggedIn) {
//         return <h1>Bienvenido de nuevo!</h1>;
//     } else {
//         return <h1>Por favor, inicia sesión.</h1>;
//     }
// }
 
// Sencillo pero puede volverse difícil de leer con muchas condiciones anidadas
 
// -------------------------------------------------------
// 2) OPERADOR TERNARIO (? :) — para condiciones simples entre dos opciones
 
// function WelcomeMessage({ isLoggedIn }) {
//     return (
//         <h1>{isLoggedIn ? "Bienvenido de nuevo!" : "Por favor, inicia sesión."}</h1>
//     );
// }
 
// Más conciso que if/else — útil cuando hay exactamente dos opciones
 
// -------------------------------------------------------
// 3) OPERADOR LÓGICO && — cuando solo hay caso verdadero, sin else
 
// function Notification({ hasNewMessages }) {
//     return (
//         <div>
//             <h1>Bienvenido!</h1>
//             {hasNewMessages && <p>Tienes nuevos mensajes.</p>}
//         </div>
//     );
// }
 
// Funciona igual que el && lógico de JavaScript:
//     true  && <p>...</p> → renderiza el <p>
//     false && <p>...</p> → no renderiza nada
 
// Usar cuando no necesitas un "else" — si necesitas mostrar algo en false, usa ternario
 
// -------------------------------------------------------
// 4) SWITCH — para múltiples condiciones
 
// function StatusMessage({ status }) {
//     switch (status) {
//         case "loading":
//             return <p>Cargando...</p>;
//         case "success":
//             return <p>Datos cargados con éxito!</p>;
//         case "error":
//             return <p>Hubo un error al cargar los datos.</p>;
//         default:
//             return <p>Estado desconocido.</p>;
//     }
// }
 
// Más organizado que if/else cuando hay muchas opciones posibles
// Ideal para manejar estados: loading, success, error
 
// -------------------------------------------------------
// CUÁNDO USAR CADA UNO
 
// if/else    → lógica compleja antes del return
// ternario   → elegir entre dos valores o componentes
// &&         → mostrar algo solo si la condición es true, sin else
// switch     → múltiples condiciones posibles
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Autenticación: mostrar login si no está autenticado, UI normal si sí lo está
//     -Notificaciones: mostrar/esconder según si hay nuevas interacciones
//     -Carritos de compra: "carrito vacío" vs resumen del pedido
//     -Indicadores de carga: mostrar "Cargando..." mientras llegan los datos de la API
//     -Sistemas de permisos: mostrar opciones solo a usuarios con permisos especiales