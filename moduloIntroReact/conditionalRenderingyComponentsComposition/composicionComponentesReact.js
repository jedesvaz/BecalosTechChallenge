// Composición de Componentes en React
// Documentación oficial: https://react.dev/learn/passing-props-to-a-component
 
// La composición permite construir interfaces reutilizables y modulares
// dividiendo la UI en pequeños componentes que se combinan para formar apps completas
// Es una alternativa más flexible al uso de herencia en POO
 
// -------------------------------------------------------
// EJEMPLO BÁSICO
// App compone Header y Content dentro de sí mismo
 
// function Header() {
//     return <h1>Bienvenido a mi aplicación</h1>;
// }
 
// function Content() {
//     return <p>Este es el contenido principal de la aplicación.</p>;
// }
 
// function App() {
//     return (
//         <div>
//             <Header />
//             <Content />
//         </div>
//     );
// }
 
// export default App;
 
// -------------------------------------------------------
// props.children
// Prop especial que permite a un componente contener otros elementos dentro de él
// Facilita la composición flexible — el componente actúa como contenedor genérico
 
// function Card({ children }) {
//     return (
//         <div style={{ border: '1px solid black', padding: '10px', borderRadius: '5px' }}>
//             {children}
//         </div>
//     );
// }
 
// function App() {
//     return (
//         <Card>
//             <h2>Título dentro de Card</h2>
//             <p>Este es un contenido dentro de la tarjeta.</p>
//         </Card>
//     );
// }
 
// export default App;
 
// Card puede envolver cualquier contenido — no está limitado a un tipo específico
 
// -------------------------------------------------------
// COMPONENTES ESPECIALIZADOS
// Dividir un componente en partes más pequeñas y específicas
// Común para diseñar componentes reutilizables con propiedades personalizadas
 
// function Modal({ title, content }) {
//     return (
//         <div style={{ border: '1px solid gray', padding: '20px', backgroundColor: 'lightgray' }}>
//             <h2>{title}</h2>
//             <p>{content}</p>
//         </div>
//     );
// }
 
// function App() {
//     return <Modal title="Aviso" content="Este es un mensaje importante." />;
// }
 
// export default App;
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Interfaces dinámicas: feeds de noticias y publicaciones en redes sociales
//     -Sistemas de diseño: Material-UI y Bootstrap usan composición para sus componentes
//     -E-commerce: carrito compuesto de CartItem, CartSummary y CheckoutButton
//     -Dashboards: widgets reutilizables como Chart, Table y Card
//     -Formularios dinámicos: campos que se agregan o eliminan según la necesidad