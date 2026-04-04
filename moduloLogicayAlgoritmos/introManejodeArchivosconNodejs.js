// Importando el módulo fs
const fs = require('fs');

// Verificando si un archivo existe
const filePath = './example.txt';


//Comprobar si existen archivos de forma síncrona 
if (fs.existsSync(filePath)) {
  console.log('El archivo existe.');
} else {
  console.log('El archivo no existe.');
}
//Leer archivos de forma asíncrona
fs.readFile('./example.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err);
    return;
  }

  console.log('Contenido del archivo:', data);
});

//Escribir archivos de forma asíncrona
fs.writeFile('./example.txt', 'Hola, Node.js!', (err) => {
  if (err) { // manejo de errores
    console.error('Error al escribir en el archivo:', err);
    return;
  }

  console.log('Archivo escrito con éxito.');
});


// //Eliminar archivo de forma asíncrona
// fs.unlink('./example.txt', (err) => {
//   if (err) {
//     console.error('Error al eliminar el archivo:', err);
//     return;
//   }

//   console.log('Archivo eliminado con éxito.');

// });

console.log('1 - antes');

fs.writeFile('archivo.txt', 'contenido', (err) => {
  console.log('3 - archivo listo'); // Esto llega "después"
});

console.log('2 - después');

// Casos de Uso del Mundo Real
// El manejo de archivos tiene muchas aplicaciones prácticas en la vida diaria y en el desarrollo de software, incluyendo:

// 1. Gestión de Logs: Guardar registros de eventos en sistemas para auditorías o depuración.

// - Ejemplo: Un servidor web puede guardar información sobre cada solicitud entrante en un archivo de log.

// 2. Cargas de Archivos: Guardar imágenes, documentos o cualquier archivo subido por un usuario en un servidor.

// - Ejemplo: Una plataforma como Instagram necesita almacenar fotos subidas por sus usuarios.

// 3. Configuraciones de Usuario: Guardar preferencias o configuraciones en archivos locales.

// - Ejemplo: Un editor de texto puede guardar configuraciones como el tamaño de fuente o el tema en un archivo JSON.

// 4. Gestión de Inventarios: Guardar datos de productos o inventarios en aplicaciones de comercio electrónico.

// - Ejemplo: Una tienda online guarda el inventario en archivos mientras se actualiza desde un sistema externo.