//ALGORITMO DE DOS PUNTEROS

//Técnica eficiente y versátil que se usa para resolver
// problemas relacionados con arreglos o cadenas ordenadas
// Cómo funciona:

// Técnica que usa dos variables o punteros que recorren un arreglo desde diferentes posiciones
// para analizar datos y encontrar soluciones a problemas

// Eficiencia:

// Reduce la cantidad de iteraciones necesarias, logrando una complejidad de tiempo O(n) en muchos casos, en 
// lugar de O(n^2), que se obtendría con bucles anidados


//Ejemplo para hallar dos números dentro de un arreglo que sumen un valor en específico
// function dosPunterosSuma(arr, objetivo) {
//     let inicio = 0; // Primer puntero
//     let fin = arr.length - 1; // Segundo puntero

//     while (inicio < fin) {
//         const suma = arr[inicio] + arr[fin];

//         if (suma === objetivo) {
//             return [arr[inicio], arr[fin]]; // Regresamos los números que cumplen la condición
//         }

//         if (suma < objetivo) {
//             inicio++; // Si la suma es menor, movemos el puntero del inicio a la derecha
//         } else {
//             fin--; // Si la suma es mayor, movemos el puntero del fin a la izquierda
//         }
//     }

//     return null; // No se encontró ninguna pareja
// }

// console.log(dosPunterosSuma([1, 2, 3, 4, 6], 6));

// //Ejemplo de detección de palíndromos:
// function esPalindromo(palabra) {
//     const palabrat=palabra.trim().replaceAll(" ","");
//     let inicio = 0;
//     let fin = palabrat.length - 1;

//     while (inicio < fin) {
//         if (palabrat[inicio] !== palabrat[fin]) {
//             return false; // Si no coinciden, no es un palíndromo
//         }
//         inicio++;
//         fin--;
//     }
//     return true; // Es un palíndromo
// }

// console.log(esPalindromo("anita lava la tina")); // true
// console.log(esPalindromo("javascript")); // false


// //Ejemplo de eliminar duplicadso en un arreglo ordenado
// function eliminarDuplicados(arr) {
//     let puntero = 0;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] !== arr[puntero]) {
//             puntero++;
//             arr[puntero] = arr[i];
//         }
//     }
//     return arr.slice(0, puntero + 1);
// }

// console.log(eliminarDuplicados([1, 1, 2, 2, 3, 4, 4]));


// //Ejemplo para encontrar elementos iguales en dos listas y devolverlos
// function encontrarInterseccion(lista1, lista2) {
//     let puntero1 = 0;
//     let puntero2 = 0;
//     const interseccion = [];

//     while (puntero1 < lista1.length && puntero2 < lista2.length) {
//         if (lista1[puntero1] === lista2[puntero2]) {
//             interseccion.push(lista1[puntero1]);
//             puntero1++;
//             puntero2++;
//         } else if (lista1[puntero1] < lista2[puntero2]) {
//             puntero1++;
//         } else {
//             puntero2++;
//         }
//     }
//     return interseccion;
// }

// console.log(encontrarInterseccion([1, 2, 4, 5], [2, 3, 4, 6]));


// Casos de Uso del Mundo Real
// Búsquedas en Listas Ordenadas

// - Buscar elementos duplicados en listas de usuarios ordenadas por ID.

// - Verificar si dos listas de productos tienen elementos en común.

// Validación de Textos

// - Usar el algoritmo para verificar si un mensaje (cadena) es un palíndromo, útil para validaciones lingüísticas o juegos.

// Análisis de Fechas o Tiempos

// - Encontrar intervalos de tiempo superpuestos en dos calendarios.

// - Verificar rangos de disponibilidad en sistemas de reservación.

// Gestión de Datos en Aplicaciones

// - Eliminar elementos duplicados al sincronizar datos de una base de datos con una aplicación móvil.

// - Identificar elementos que faltan entre dos listas de inventario.

//PRÁCTICA: ALGORITMO DE LOS 2 PUNTEROS

const invitados = ["Ana", "Carlos", "Cecilia", "Daniel", "Diana", "Eduardo", "Estefanía"];

const  encontrarPareja =(arr)=> {
    let inicio = 0;
    let siguiente = 1;

    while (siguiente < arr.length) {
        if (arr[inicio][0]===arr[siguiente][0]){
            return [arr[inicio],arr[siguiente]]
        }else{
            inicio++;
            siguiente++;
        };
    }

    return null; // Si no se encuentra ningún par
}

console.log(encontrarPareja(invitados));

// Resultado: ["Carlos", "Cecilia"]