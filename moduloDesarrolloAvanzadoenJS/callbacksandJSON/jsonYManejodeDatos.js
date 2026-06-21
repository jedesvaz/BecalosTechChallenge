// JSON y Manejo de Datos en JavaScript

// JSON (JavaScript Object Notation) es un formato estándar para el intercambio de datos
// Ligero, fácil de leer para humanos y sencillo de procesar por máquinas

// -------------------------------------------------------
// ¿QUÉ ES JSON?
// Formato de intercambio de datos basado en texto, estructurado de forma similar a un
// objeto de JavaScript
// Los datos se representan en pares clave-valor
// Los valores pueden ser cadenas, números, booleanos, objetos o arreglos

// Un objeto JSON se representa con llaves {}, las propiedades se separan por comas,
// y los valores de texto deben ir entre comillas dobles ""

// Ejemplo:
// {
//   "nombre": "Carlos",
//   "edad": 25,
//   "esEstudiante": true,
//   "materias": ["Matemáticas", "Física", "Programación"]
// }

// -------------------------------------------------------
// CONVERTIR JSON A OBJETO DE JAVASCRIPT (JSON.parse)
// Necesario cuando recibimos datos en JSON, como desde una API o un archivo,
// y queremos trabajar con ellos en nuestro código

// const jsonData = '{"nombre": "Carlos", "edad": 25, "esEstudiante": true}';
// const objeto = JSON.parse(jsonData);

// console.log(objeto.nombre); // "Carlos"
// console.log(objeto.edad);   // 25

// JSON.parse() toma el texto JSON y lo convierte en un objeto de JavaScript real,
// con el que ya se puede acceder a propiedades normalmente

// -------------------------------------------------------
// CONVERTIR OBJETO DE JAVASCRIPT A JSON (JSON.stringify)
// Útil cuando queremos enviar o guardar datos en formato JSON, por ejemplo
// para una solicitud HTTP a una API

// const estudiante = {
//     nombre: "Ana",
//     edad: 22,
//     esEstudiante: true,
//     materias: ["Historia", "Inglés", "Literatura"]
// };

// const jsonString = JSON.stringify(estudiante);
// console.log(jsonString);
// Salida: {"nombre":"Ana","edad":22,"esEstudiante":true,"materias":["Historia","Inglés","Literatura"]}

// -------------------------------------------------------
// JSON CON ARREGLOS
// Un arreglo en JSON es una lista ordenada de valores, representada con corchetes []
// Los elementos se separan por comas y pueden ser de cualquier tipo

// Ejemplo:
// {
//   "estudiantes": [
//     { "nombre": "Carlos", "edad": 25 },
//     { "nombre": "Ana", "edad": 22 },
//     { "nombre": "Luis", "edad": 23 }
//   ]
// }

// const jsonData = '{"estudiantes":[{"nombre":"Carlos","edad":25},{"nombre":"Ana","edad":22},{"nombre":"Luis","edad":23}]}';
// const data = JSON.parse(jsonData);

// console.log(data.estudiantes[0].nombre);  // "Carlos"
// console.log(data.estudiantes[1].edad);    // 22

// data.estudiantes es un arreglo de objetos, se accede con índices como cualquier arreglo

// -------------------------------------------------------
// JSON CON OBJETOS ANIDADOS
// Los objetos JSON pueden contener otros objetos dentro, permitiendo estructuras
// más complejas y jerárquicas

// Ejemplo:
// {
//   "empresa": {
//     "nombre": "Tech Solutions",
//     "ubicacion": "Madrid",
//     "empleados": [
//       { "nombre": "Carlos", "cargo": "Desarrollador", "edad": 30 },
//       { "nombre": "Ana", "cargo": "Diseñadora", "edad": 28 }
//     ]
//   }
// }

// const jsonData = '{"empresa":{"nombre":"Tech Solutions","ubicacion":"Madrid","empleados":[{"nombre":"Carlos","cargo":"Desarrollador","edad":30},{"nombre":"Ana","cargo":"Diseñadora","edad":28}]}}';
// const data = JSON.parse(jsonData);

// console.log(data.empresa.nombre);              // "Tech Solutions"
// console.log(data.empresa.empleados[0].cargo);  // "Desarrollador"

// data.empresa.empleados es un arreglo de objetos dentro de un objeto anidado

// -------------------------------------------------------
// CASOS DE USO

// 1) Intercambio de datos con APIs
// fetch('https://api.example.com/usuarios')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => console.error('Error:', error));

// response.json() convierte la respuesta del servidor en una estructura de JavaScript usable

// 2) Guardar datos localmente (localStorage)
// const usuario = {
//     nombre: "Lucía",
//     edad: 30
// };

// localStorage.setItem('usuario', JSON.stringify(usuario));

// const usuarioGuardado = JSON.parse(localStorage.getItem('usuario'));
// console.log(usuarioGuardado.nombre); // "Lucía"

// 3) Configuración de aplicaciones
// Muchas apps almacenan su configuración en archivos JSON por ser fácil de leer y modificar

// Ejemplo:
// {
//   "nivel": 2,
//   "sonido": true,
//   "velocidad": 5
// }