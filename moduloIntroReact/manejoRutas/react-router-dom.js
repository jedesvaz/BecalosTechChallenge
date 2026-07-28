// Manejo de Rutas con react-router-dom
// Documentación oficial: https://reactrouter.com/en/main
 
// react-router-dom gestiona la navegación en SPAs (Single Page Applications)
// Permite cambiar lo que se muestra en pantalla según la URL
// SIN recargar la página — solo swapea qué componente se renderiza
 
// -------------------------------------------------------
// INSTALACIÓN
 
// npm install react-router-dom
 
// Envolver la app con BrowserRouter en main.jsx:
// import { BrowserRouter } from 'react-router-dom';
 
// ReactDOM.createRoot(document.getElementById('root')).render(
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// );
 
// -------------------------------------------------------
// DEFINIR RUTAS CON Routes Y Route
// Cada Route asocia una URL con un componente
 
// import { Routes, Route } from 'react-router-dom';
 
// function App() {
//     return (
//         <Routes>
//             <Route path="/" element={<Home />} />        // URL / → muestra Home
//             <Route path="/about" element={<About />} />  // URL /about → muestra About
//             <Route path="*" element={<NotFound />} />    // cualquier otra URL → 404
//         </Routes>
//     );
// }
 
// -------------------------------------------------------
// NAVEGACIÓN SIN RECARGA CON Link
// Link reemplaza al <a href> tradicional para no recargar la página
 
// import { Link } from 'react-router-dom';
 
// function Navbar() {
//     return (
//         <nav>
//             <Link to="/">Inicio</Link>
//             <Link to="/about">Acerca de</Link>
//         </nav>
//     );
// }
 
// -------------------------------------------------------
// RUTAS DINÁMICAS Y useParams
// :param en el path crea una ruta dinámica
// useParams() extrae el valor del parámetro de la URL
 
// import { useParams } from 'react-router-dom';
 
// function UserProfile() {
//     const { id } = useParams();
//     return <h1>Perfil del usuario {id}</h1>;
// }
 
// Definir la ruta:
// <Route path="/user/:id" element={<UserProfile />} />
// /user/1 → id = "1"
// /user/42 → id = "42"
// mismo componente, distinto dato
 
// -------------------------------------------------------
// REDIRECCIONES CON Navigate
// Redirige al usuario a otra ruta — útil para rutas protegidas
 
// import { Navigate } from 'react-router-dom';
 
// function ProtectedRoute({ isAuthenticated, children }) {
//     return isAuthenticated ? children : <Navigate to="/" />;
//     // si está autenticado → muestra el contenido
//     // si no → redirige al inicio
// }
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Panel de administración: rutas protegidas según el rol del usuario
//     -E-commerce: rutas dinámicas para productos (/producto/:id)
//     -Blogs o foros: rutas con slug en lugar de IDs para mejor SEO