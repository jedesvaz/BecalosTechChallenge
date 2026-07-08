// Manejo de Formularios con JavaScript

// Los formularios permiten la interacción entre usuarios y aplicaciones
// Manejarlos implica capturar, validar y procesar los datos que los usuarios introducen

// -------------------------------------------------------
// ESTRUCTURA BÁSICA DE UN FORMULARIO EN HTML
// Campos comunes: input, textarea, checkboxes, radio buttons, select

// <form id="myForm">
//     <label for="name">Nombre:</label>
//     <input type="text" id="name" name="name">
//     <label for="email">Correo Electrónico:</label>
//     <input type="email" id="email" name="email">
//     <button type="submit">Enviar</button>
// </form>

// Elementos:
//     -form: define el formulario
//     -label: descripción para cada campo
//     -input: campo donde el usuario ingresa datos
//     -button: botón para enviar el formulario

// -------------------------------------------------------
// CAPTURA DE DATOS CON JAVASCRIPT
// Se capturan los datos mediante eventos como submit o change

// const form = document.getElementById('myForm');

// form.addEventListener('submit', function(event) {
//     event.preventDefault(); // previene el envío automático y la recarga de la página
//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     console.log(`Nombre: ${name}, Correo: ${email}`);
// });

// event.preventDefault(): detiene el comportamiento por defecto del formulario
// .value: obtiene el valor ingresado por el usuario en un campo

// -------------------------------------------------------
// VALIDACIÓN DE DATOS
// Asegura que los datos cumplan ciertos criterios antes de ser enviados
// Puede hacerse del lado del cliente (JavaScript) o del servidor

// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const email = document.getElementById('email').value;

//     if (!email.includes('@')) {
//         alert('Por favor, introduce un correo electrónico válido.');
//         return;
//     }

//     alert('Formulario enviado correctamente.');
// });

// includes('@'): verifica si el correo contiene el símbolo @
// alert(): muestra un mensaje al usuario

// -------------------------------------------------------
// ENVÍO DE DATOS
// Una vez validados, los datos se envían a un servidor mediante fetch

// form.addEventListener('submit', function(event) {
//     event.preventDefault();

//     const data = {
//         name: document.getElementById('name').value,
//         email: document.getElementById('email').value
//     };

//     fetch('https://api.ejemplo.com/submit', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(data)
//     })
//         .then(response => response.json())
//         .then(data => console.log('Datos enviados:', data))
//         .catch(error => console.error('Error:', error));
// });

// fetch: realiza la solicitud HTTP al servidor
// JSON.stringify(): convierte los datos a formato JSON para enviarlos

// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Registro en plataformas online: nombre, correo, contraseña
//     -Encuestas y opiniones: recopilar opiniones de clientes
//     -Carritos de compra: procesar direcciones de envío y métodos de pago
//     -Reservaciones: boletos de avión, habitaciones de hotel, citas médicas