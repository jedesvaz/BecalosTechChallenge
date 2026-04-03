//INTRODUCCIÓN A ESTRUCTURAS DE DATOS EN JAVASCRIPT
//Objetos en Js
// Los objetos en JS son estructuras de datos que permiten guardar información relacionada en un solo lugar. 
// Un objeto se compone de propiedades (clave-valor) y métodos (funciones asociadas al objeto). 
// Los objetos son fundamentales en la programación orientada a objetos y se utilizan para modelar 
// entidades del mundo real, como personas, vehículos, productos, etc.

// //Ejemplo de un objeto en JS
// let persona = {
//     nombre: "Juan",
//     edad: 30,
//     ciudad: "Madrid"
// };

// // Operaciones con objetos:
// //Acceder a las propiedades de un objeto
// console.log(persona.nombre);
// // modificar la propiedad de un objeto
// persona.edad = 31;
// console.log(persona.edad);
// //Agregar una nueva propiedad a un objeto
// persona.profesion = "Ingeniero";
// console.log(persona.profesion);


// //Otro ejemplo de objeto
// let libro = {
//     titulo: "Cien años de soledad",
//     autor: "Gabriel García Márquez",
//     año: 1967
// };

// console.log(libro.titulo);  // Imprime "Cien años de soledad"

//Comparación entre objetos y arreglos
//1. Arreglos convienen para almacenar datos ordenados y accedeer a ellos por su índice
//2 Los objetos convienen cuando se necesita almacenar una colección no ordenada de datos relacionados entre sí,
//donde cada dato tiene una clave única para acceder a él.

//Ejemplo de uso Combinado
// let productos = [
//     { nombre: "Camiseta", precio: 20, stock: 50 },
//     { nombre: "Pantalón", precio: 40, stock: 30 },
//     { nombre: "Zapatos", precio: 60, stock: 20 }
// ];

// console.log(productos[1].nombre, productos[1].prescio); // Imprime "Pantalón 40"

//Casos de uso en el Mundo Real
//Arreglos: 
// -Lista de tareas: para almacenar tareas a lo largo del día
// -Carrito de compras: productos que un usuario añade a su carrito en una tienda
// -Orden de empleados: Para almacenar nombres de los empleados en un proyecto, asegurándose de que se sigan ciertos pasos o etapas

//Objetos: 
// -Registro de usuarios: un objeto puede guardar información de un usuario, como su nombre, dirección, email
// -Configuración de una aplicación: Un objeto puede guardar configuraciones o parámetros de una aplicación, como tema de interfaz, usuario, idioma
// -Receta de cocina: un objeto puede guardar los ingredientes y las instrucciones de una receta, cada uno con su nombre y cantidad


// //ESTRUCTURAS DE DATOS COMUNES EN JAVASCRIPT
// // Existen otras estructuras de datos importantes que pueden ser útiles en el desarrollo de software, especialmente
// // a la hora de OPTIMIZAR RENDIMIENTO Y ORGANIZAR DATOS DE MANERA MÁS EFICIENTE

// // PILAS:
// // Estructura que sigue el principio "Último en entrar, primero en salir (LIFO)"
// // Ejemplo de uso de pilas:
// let pila = [];

// pila.push("Página 1");

// pila.push("Página 2");

// pila.push("Página 3");

// console.log(pila.pop());  // Imprime "Página 3", la última página visitada
// console.log(pila.length);  
// //La pila se ha trabajado a partir de un arreglo y las funciones push() y pop()
// //COLAS
// //Similares a las pilas, pero el principio que siguen es Primero en entrar, Primero en Salir (FIFO)

// //Ejemplo de uso de Cola:
// let cola = [];

// cola.push("Trabajo 1");

// cola.push("Trabajo 2");

// cola.push("Trabajo 3");

// console.log(cola.shift()); //shift elimina el primer elemento del arreglo y lo devuelve
// //La cola se ha trabajado a partir de un arreglo y las funciones push() y shift()
// //CONJUNTO (SET)
// // Almacena elementos únicos, sin que haya duplicados. 
// //Ejemplo de Set
// let usuarios = new Set();

// usuarios.add("Juan");

// usuarios.add("Ana");

// usuarios.add("Juan");  // No se agrega, porque "Juan" ya está en el conjunto
// usuarios.add("ANA");  

// console.log(usuarios);
// //Se utiliza directamente una Estructura llamada Set


// //MAPAS (MAPS)
// // Similar a un objeto, pero permite usar cualquier tipo de clave, no solo cadenas o símbolos. Los mapas
// // mantienen el orden de inserción de los elementos
// let precios = new Map();

// precios.set("productoA", 25);

// precios.set("productoB", 40);

// precios.set("productoC", 15);

// console.log(precios.get("productoB"));
// //Se utiliza directamente la estructura Map


// //Árboles (Trees)
// // Estructura jerárquica en la que cada elemento (o nodo) tiene un valor y una lista de referencias a otros nodos
// // llamados hijos. Útiles cuando se necesita representar relaciones jerárquicas (como la estructura de un sistema de archivos o la organización de una empresa)
// //Ejemplo de árbol:
// let arbol = {

//     nombre: "Root",

//     hijos: [

//         { nombre: "Carpeta 1", hijos: [] },
//         { nombre: "Carpeta 2", hijos: [{ nombre: "Subcarpeta", hijos: [] }] }
//     ]
// };
// //Se utiliza un objeto para representar la estructura de un árbol



//OTRAS ESTRUCTURAS DE DATOS COMUNES EN DESARROLLO DE SOFTWARE
//Listas (Lists)
// Similares a los arreglos, se dividen en 2 tipos:
// -Estáticas -Una vez que se definieron, su tamaño no cambia
// -Dinámicas -Pueden crecer y reducir su tamaño durante la ejecución del programa, haciéndolas más eficientes
// en cuanto a memoria en ciertos escenarios

//Ejemplo de uso de Lista dinámica:
// let listaDeTareas = ["Comprar pan", "Llamar a mamá", "Enviar correo"];

// listaDeTareas.push("Ir al gimnasio");  // Añadir una tarea a la lista

// console.log(listaDeTareas, listaDeTareas.length);

// //Ejemplo de uso de Lista estática:
// const listaDeTareas2 = Object.freeze(["Comprar pan", "Llamar a mamá", "Enviar correo"]);

// // listaDeTareas2.push("Ir al gimnasio"); //Lanza error al ser listaDeTareas2 una lista estática


// //LISTAS LIGADAS (LINKED LISTS)

// //Se compone de nodos, y cada uno tiene un valor y una referencia al siguiente nodo de la secuencia. 
// // No almacenan sus elementos de manera contigua en memoria, lo que permite una inserción y eliminación
// // de elementos más eficiente en ciertas situaciones

// // -Listas ligadas simples: Cada nodo solo apunta al siguiente nodo
// // -Listas doblemente ligadas: Cada nodo tiene 2 enlaces: uno al siguiente nodo y otro al nodo anterior

// //Ejemplo de lista ligada
// function Nodo(valor) {
//   this.valor = valor;
//   this.siguiente = null;  // Enlace al siguiente nodo
// }

// // Crear una lista ligada simple
// let nodo1 = new Nodo("Página 1");
// let nodo2 = new Nodo("Página 2")
// let nodo3 = new Nodo("Página 3");

// // Enlazar los nodos
// nodo1.siguiente = nodo2;
// nodo2.siguiente = nodo3;
// console.log(nodo1.siguiente.valor);  // Imprime "Página 2"


// //CONJUNTOS DE ELEMENTOS (SETS) O BOLSAS (BAGS)
// //Almacenan elementos sin un orden específico y sin permitir duplicados. Se usan principalmente para verificar
// // la pertenencia de un elemento de manera eficiente
// // Sí permiten duplicados, pero no mantiene un orden en los elementos

// //Ejemplo: 
// let carritoDeCompras = new Set();  // Usamos Set para evitar duplicados

// carritoDeCompras.add("Zapatos");

// carritoDeCompras.add("Camiseta");

// carritoDeCompras.add("Zapatos");  // No se agregará porque "Zapatos" ya está en el conjunto

// console.log(carritoDeCompras);  // Imprime Set {"Zapatos", "Camiseta"}


// //TABLAS HASH (HASH TABLES)
// // Mapea claves a través de una función hash, que convierte una clave en un índice en una tabla interna

// //Ejemplo
// let usuarios = new Map();

// usuarios.set("juan123", "password123");

// usuarios.set("ana456", "password456");

// console.log(usuarios.get("juan123"));

// //COLAS DE PRIORIDAD (PRIORITY QUEUES)
// // Almacena elementos con una prioridad asociada, y siempre extrae el elementos con la prioridad más alta (o baja,
// //     dependiendo de la implementación). Los elementos no se extraen en el orden en que fueron insertados,
// //     sino en función de su prioridad
// class ColaDePrioridad {
//   constructor() {
//     this.items = [];
//   }

//   agregar(item, prioridad) {
//     this.items.push({ item, prioridad });
//     this.items.sort((a, b) => b.prioridad - a.prioridad);  // Ordena por prioridad
//   }

//   extraer() {
//     return this.items.shift();  // Extrae el primer elemento (el de mayor prioridad)
//   }
// }

// let cola = new ColaDePrioridad();
// cola.agregar("Tarea urgente", 1);
// cola.agregar("Tarea normal", 3);
// console.log(cola.extraer());  // Imprime { item: "Tarea normal", prioridad: 3 }


//PRACTICA: ESTRUCTURA DE DATOS

import {agregarProducto, eliminarProducto, mostrarLista} from './modulos.js'; //Importación de las funciones desde el modulos.js

let listaDeCompras = new Set();

agregarProducto(listaDeCompras, "Leche");
agregarProducto(listaDeCompras, "Pan");
agregarProducto(listaDeCompras, "Huevos");
mostrarLista(listaDeCompras);
eliminarProducto(listaDeCompras, "Pan");
mostrarLista(listaDeCompras);
