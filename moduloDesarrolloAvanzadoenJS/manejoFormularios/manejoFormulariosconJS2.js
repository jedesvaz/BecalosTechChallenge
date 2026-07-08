// Manejo de Formularios Parte 2 - Campos Comunes en HTML5

// HTML5 introdujo nuevos tipos de campos que mejoran la experiencia del usuario
// y facilitan el manejo de formularios

// -------------------------------------------------------
// CASILLAS DE VERIFICACIÓN (CHECKBOX)
// Permiten seleccionar una o varias opciones de un conjunto

// HTML:
// <form>
//     <label><input type="checkbox" name="intereses" value="deportes"> Deportes</label>
//     <label><input type="checkbox" name="intereses" value="música"> Música</label>
//     <label><input type="checkbox" name="intereses" value="arte"> Arte</label>
// </form>

// type="checkbox": define una casilla de verificación
// name: agrupa los valores bajo un mismo nombre
// value: valor asociado a la opción seleccionada

// Verificar si está marcada en JavaScript:
// const checkbox = document.querySelector('input[type="checkbox"]');
// console.log(checkbox.checked); // true o false

// -------------------------------------------------------
// BOTONES DE RADIO (RADIO BUTTONS)
// Permiten seleccionar una única opción de un conjunto

// HTML:
// <form>
//     <label><input type="radio" name="genero" value="masculino"> Masculino</label>
//     <label><input type="radio" name="genero" value="femenino"> Femenino</label>
//     <label><input type="radio" name="genero" value="otro"> Otro</label>
// </form>

// type="radio": define un botón de radio
// name: garantiza que solo un botón del grupo pueda seleccionarse a la vez

// Obtener el valor seleccionado:
// const selectedRadio = document.querySelector('input[name="genero"]:checked');
// console.log(selectedRadio.value); // "masculino", "femenino" o "otro"

// -------------------------------------------------------
// MENÚS DESPLEGABLES (SELECT)
// Permiten elegir una opción de una lista

// HTML:
// <form>
//     <label for="ciudad">Ciudad:</label>
//     <select id="ciudad" name="ciudad">
//         <option value="cdmx">Ciudad de México</option>
//         <option value="guadalajara">Guadalajara</option>
//         <option value="monterrey">Monterrey</option>
//     </select>
// </form>

// <select>: crea el menú desplegable
// <option>: define las opciones dentro del menú
// value: valor que se enviará al servidor cuando se seleccione la opción

// Capturar la opción seleccionada:
// const ciudad = document.getElementById('ciudad');
// console.log(ciudad.value); // valor de la opción seleccionada

// -------------------------------------------------------
// CAMPOS DE FECHA Y HORA
// HTML5 introdujo campos específicos para capturar fechas y horas

// HTML:
// <form>
//     <label for="fecha">Fecha de nacimiento:</label>
//     <input type="date" id="fecha" name="fecha">
//     <label for="hora">Hora de la cita:</label>
//     <input type="time" id="hora" name="hora">
// </form>

// type="date": crea un selector de fechas
// type="time": crea un selector de horas

// Capturar los valores:
// const fecha = document.getElementById('fecha').value;
// const hora = document.getElementById('hora').value;
// console.log(`Fecha: ${fecha}, Hora: ${hora}`);

// -------------------------------------------------------
// CAMPOS DE ARCHIVO
// Permiten cargar archivos desde el dispositivo del usuario

// HTML:
// <form>
//     <label for="archivo">Sube un archivo:</label>
//     <input type="file" id="archivo" name="archivo">
// </form>

// type="file": permite al usuario seleccionar archivos

// Acceder al archivo cargado:
// const archivo = document.getElementById('archivo').files[0];
// console.log(archivo.name); // nombre del archivo

// -------------------------------------------------------
// CASOS DE USO EN EL MUNDO REAL
//     -Formularios de registro: género con radio buttons, intereses con checkboxes
//     -Compra de boletos: menús desplegables para elegir fechas o asientos
//     -Citas médicas: campos date y time para seleccionar fecha y hora
//     -Carga de documentos: currículums o fotos en formularios de empleo