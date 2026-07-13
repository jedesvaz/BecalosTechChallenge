// Validación de Formularios con Zod
 
// La validación de datos es esencial en el desarrollo web
// Previene errores, asegura la calidad de la información y protege la integridad del sistema
// Zod es una biblioteca que facilita definir y validar esquemas de datos de forma estructurada
 
// -------------------------------------------------------
// ¿QUÉ ES ZOD?
// Biblioteca de validación de esquemas para JavaScript y TypeScript
// Define cómo debería lucir un conjunto de datos y los valida automáticamente
// Soporta objetos, cadenas, números, fechas y más
 
// -------------------------------------------------------
// INSTALACIÓN
 
// npm install zod
 
// Importar en el proyecto:
// import { z } from 'zod';
 
// -------------------------------------------------------
// DEFINICIÓN DE ESQUEMAS BÁSICOS
// Un esquema define las reglas que deben cumplir los datos
 
// const schema = z.object({
//     name: z.string().min(1, "El nombre es obligatorio"),
//     age: z.number().int().positive("La edad debe ser un número positivo"),
// });
 
// z.string(): el valor debe ser una cadena
// z.number(): el valor debe ser un número
// min(1): la cadena debe tener al menos 1 carácter
// int(): el número debe ser entero
// positive(): el número debe ser positivo
 
// -------------------------------------------------------
// VALIDACIÓN CON parse()
// Si los datos son válidos, se ejecuta el bloque try
// Si hay errores, se capturan en el catch
 
// try {
//     schema.parse({ name: "Juan", age: 25 });
//     console.log("Datos válidos");
// } catch (error) {
//     console.error(error.errors);
// }
 
// -------------------------------------------------------
// VALIDACIÓN DE FORMULARIOS
// Ejemplo con formulario de nombre, correo y edad
 
// HTML:
// <form id="userForm">
//     <input type="text" id="name" placeholder="Nombre" required />
//     <input type="email" id="email" placeholder="Correo electrónico" required />
//     <input type="number" id="age" placeholder="Edad" required />
//     <button type="submit">Enviar</button>
// </form>
 
// JavaScript con Zod:
// const userSchema = z.object({
//     name: z.string().min(1, "El nombre es obligatorio"),
//     email: z.string().email("Correo electrónico inválido"),
//     age: z.number().int().positive("La edad debe ser un número positivo"),
// });
 
// document.getElementById("userForm").addEventListener("submit", (event) => {
//     event.preventDefault();
 
//     const formData = {
//         name: document.getElementById("name").value,
//         email: document.getElementById("email").value,
//         age: Number(document.getElementById("age").value), // convierte el string a número
//     };
 
//     try {
//         userSchema.parse(formData);
//         alert("Formulario enviado correctamente");
//     } catch (error) {
//         alert(`Errores: ${error.errors.map(e => e.message).join(", ")}`);
//     }
// });
 
// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Registro de usuarios: nombre, correo, contraseña y confirmación de contraseña
//     -Encuestas: validar que se seleccione al menos una respuesta o que los comentarios
//      tengan una longitud mínima
//     -Reservaciones: verificar que fecha y hora sean válidas y que los datos de contacto
//      estén completos
//     -Formularios de contacto: validar nombre, mensaje y correo electrónico