//MÉTODOS DE ARREGLOS
// Herramientas para manipular, transformar y analizar datos en un formato de lista.

// find()
// devuelve el primer elemento en un arreglo que cumple una condición dada. Si no hay algún elemento
// que lo cumpla, retorna undefined
// const numeros = [10, 20, 30, 40];

// const resultado = numeros.find(num => num > 25); //find recibe num. Una vez recibido, compara si es mayor que 25


// console.log("resultado de  usar find",resultado); // 30


// // map()
// // Crea un nuevo arreglo aplicando una función a cada elemento del arreglo original, sin modificar al original

// const numerosq = [1, 2, 3, 4];

// const cuadrados = numerosq.map(num => num ** 2);

// console.log("resultado de  usar map: arreglo cuadrados: ", cuadrados); // [1, 4, 9, 16]
// console.log("arreglo original: ", numerosq); 


// // filter()
// // Devuelve un nuevo arreglo que contiene todos los elementos que cumplen una condición especificada
// const numerosw = [5, 10, 15, 20];

// const mayores = numerosw.filter(num => num > 10);

// console.log("resultado de  usar filter",mayores);


// // forEach()
// // Ejecuta una función para cada elemento del arreglo. No devuelve un nuevo arreglo ni modifica el original

// const frutas = ["manzana", "plátano", "naranja"];

// frutas.forEach(fruta => console.log("resultado de  usar forEach",fruta));


// sort()
// Ordena los elementos de un arreglo en su lugar y devuelve el mismo arreglo ordenado. 
// Por defecto, convierte los elementos a cadenas y los ordena en orden lexicografico, pero puede personalizarse
// el criterio de ordenación

// const numerose = [30, 5, 20, 10];

// numerose.sort((a, b) => a - b); // Orden ascendente

// console.log("resultado de  usar sort, con criterio de ordenación",numerose); // [5, 10, 20, 30]

// const numerosr = [30, 5, 20, 10];

// numerosr.sort(); 
// console.log("resultado de  usar sort, sin criterio de ordenación",numerosr); 


// // reduce()
// // Ejecuta una función de callback sobre cada elemento del arreglo, acumulando un valor único que se devuelve al final
// // Puede usarse para:
// // -Sumar elementos
// // -Concatenar cadenas
// // -Crear objetos
// // -Realizar operaciones más complejas
// // Tiene un acumulador que se actualizar en cada iteración según la lógica definida en la función

// const numerost = [1, 2, 3, 4];

// const suma = numerost.reduce((acumulador, num) => acumulador + num, 0);

// console.log("resultado de  usar reduce",suma);


// // some()
// // Verifica si al menos un elemento de un arreglo cumple con la condición definida  en un callback
// // Si encuentra un elemento que cumple la condición, detiene la iteracióny devuelve true. Si ninguno cumple, 
// // devuelve false. 

// const numerosy = [1, 2, 3, 4];

// const hayMayores = numerosy.some(num => num > 3);

// console.log("resultado de  usar some",hayMayores);


// // every()
// // Evalúa si todos los elementos de un arreglo cumplen con una condición especificada en una función de callback.
// // Si todos los elementos de un arreglo cumplen, devuelve true; si al menos uno no lo hace, devuelve false.
// // Al igual que some, una vez que tiene un resultado definitivo, detiene la iteración, haciéndolo eficiente

// const numerosu = [2, 4, 6, 8];

// const sonPares = numerosu.every(num => num % 2 === 0);
// const sonImpares = numerosu.every(num => num % 2 != 0);

// console.log("resultado de  usar every",sonPares); 
// console.log("resultado de  usar every",sonImpares); 


// // includes()
// // Verifica si el arreglo contien un valor específico, devolviendo true si lo encuentra y false si no. 
// // En contraste con some, includes no usa un callback y simplemente busca el valor exacto proporcionado

// const frutas = ["manzana", "plátano", "naranja"];

// const tieneManzana = frutas.includes("manzana");

// console.log("resultado de  usar includes, si el arreglo frutas contiene manzana:",tieneManzana); 
// console.log("resultado de  usar includes, si el arreglo frutas contiene uva:",frutas.includes("uva")); 


// Casos de Uso en el Mundo Real
// Algunos métodos adicionales se describen en la siguiente lección.

// Aplicaciones de Tiendas en Línea

// - filter(): Filtrar productos por precio o categoría.

// - find(): Encontrar un producto específico basado en el ID.

// Administración de Contactos

// - map(): Crear una lista con solo los nombres de los contactos.

// - includes(): Verificar si un nombre está en la lista de contactos.

// Seguimiento de Hábitos

// - every(): Verificar si completaste todas tus metas diarias.

// - some(): Comprobar si al menos cumpliste una meta.

// Orden de Calificaciones

// - sort(): Ordenar calificaciones de estudiantes de mayor a menor.

// Cálculos Financieros

// - reduce(): Calcular el gasto total de una lista de transacciones.

//PRACTICA: MÉTODOS DE ARREGLOS
import {menosDeCienF, ordenarListaporOrdenAlfa, soloNombresF} from './modulos.js'; //Importación de las funciones desde el modulos.js

const productos = [
    { nombre: "Vaquera", precio: 15, categoria: "Ropa" },
    { nombre: "Laptop", precio: 800, categoria: "Electrónica" },
    { nombre: "Libro The rise of Kyoshi", precio: 12, categoria: "Libros" },
    { nombre: "Mocasín", precio: 50, categoria: "Ropa" },
    { nombre: "Celular", precio: 600, categoria: "Electrónica" },
];




const menosDeCien = menosDeCienF(productos);
ordenarListaporOrdenAlfa(menosDeCien);
const soloNombres = soloNombresF(menosDeCien);


console.log("arreglo de solo nombres", soloNombres); 


