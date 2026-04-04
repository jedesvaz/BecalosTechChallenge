//Algortimo Sliding Window

// Técnica utilizada para resolver problemas que involucran subconjuntos continuos de datos,
// como arreglos o cadenas. 
// Optimiza el tiempo de ejecución al reducir la necesidad de usar bucles anidados o cálculos redundantes

// Cómo funciona: 
// Implica crear una ventana de tamaño fijo o variable que se mueve a través de un conjuntos de datos
// La ventana es una porción específica del conjunto que se analiza. En lugar de recalcular desde 0 cada
// vez, se reutilizan los cálculos anteriores para optimizar la solución

// Tipos:
// -Ventaja Fija. El tamaño de la ventana es constante durante la ejecución del algoritmo. 
// Se utiliza cuando el problema requiere analizar un subconjunto de tamaño fijo dentro de una estructura
// más grande, como un arreglo o una cadena
    // -Cómo funciona: 
    // 1) Se calcula el resultado de la primera ventana (ejemplo: la suma de los primero k elementos de un arreglo)
    // 2) En cada paso, se desliza la ventana un elemento hacia adelante. 
    //         -Se agrega el nuevo elemento que entra en la ventana
    //         -Se elimina el elemento que queda fuera de la ventana
    // 3)  Permite reutilizar los cálculos previos en lugar de recomenzar desde 0, lo que ahorra tiempo


    // Ejemplo: Encontrar la suma máxima de k números consecutivos
// function maxSumaConsecutiva(arr, k) {
//     let maxSuma = 0;
//     let sumaActual = 0;

//     // Paso 1: Calcula la suma inicial para los primeros 'k' elementos
//     for (let i = 0; i < k; i++) {
//         sumaActual += arr[i];
//     }

//     maxSuma = sumaActual;

//     // Paso 2: Desliza la ventana a lo largo del arreglo
//     for (let i = k; i < arr.length; i++) {
//         sumaActual += arr[i] - arr[i - k]; // Agrega el nuevo elemento y elimina el primero
//         maxSuma = Math.max(maxSuma, sumaActual); // Actualiza el máximo si es necesario
//     }

//     return maxSuma;
// }

// console.log(maxSumaConsecutiva([2, 1, 5, 1, 3, 2], 3)); 




//     // NOTAS:
//     // -Me recuerda a cómo funcionan los kernels en procesamiento de imágenes
//     // -La ventana parte de dos punteros que se mueven al mismo tiempo y encierrar ciertos valores


// // -Ventana variable
// // El tamaño de la ventana puede cambiar dinámicamente durante la ejecución del algoritmo, dependiendo
// // de una condición específica. 
// // Es útil cuando se trata de encontrar un subconjunto continuo que cumpla ciertas restricciones, como:
// //     -Suma objetivo
// //     -Una cantidad de elementos únicos
// //     -Secuencia válida
// // Cómo funciona:
// //     1)Se usa un puntero que marca el inicio de la ventana y otro que marca el final
// //     2)Se expande el final de la ventana (puntero derecho) hasta que la condición deseada se cumpla
// //     3)Cuando la condición se cumple, se mueve el puntero izquierdo hasta que la condición deje de cumplirse,
// //     tratando de minimizar la ventana
// //     4)En el proceso, se registra el resultado óptimo


// // Ejemplo: Encontrar la subcadena más corta que tenga una suma mayor o igual que "target"

// function ventanaVariable(arr, target) {
//     let sumaActual = 0, inicio = 0, longitudMinima = Infinity;

//     // Expande el puntero derecho para recorrer el arreglo
//     for (let fin = 0; fin < arr.length; fin++) {
//         sumaActual += arr[fin];
//         // Contrae la ventana desde el inicio cuando la suma cumple la condición
//         while (sumaActual >= target) {
//             longitudMinima = Math.min(longitudMinima, fin - inicio + 1);
//             sumaActual -= arr[inicio];
//             inicio++; // Mueve el inicio hacia adelante
//         }
//     }

//     return longitudMinima === Infinity ? 0 : longitudMinima;
// }

// console.log(ventanaVariable([2, 3, 1, 2, 4, 3], 7));


// Casos de Uso en el Mundo Real
// 1. Gestión de Series Temporales (Búsqueda en Ventanas de Tiempo).

// En aplicaciones como monitoreo de clima o análisis financiero, se utiliza el Sliding Window para calcular promedios, máximos o mínimos en un rango de tiempo continuo, por ejemplo, las últimas 24 horas.

// 2. Filtrado de Mensajes en Redes Sociales

// Un sistema que muestra publicaciones populares puede usar esta técnica para analizar el "engagement" (reacciones, comentarios) dentro de un intervalo de tiempo.

// 3. Recomendaciones de Productos

// En plataformas como Amazon o Netflix, se pueden analizar patrones de clics o vistas recientes de un usuario usando Sliding Window para personalizar recomendaciones.

// 4. Optimización en Juegos

// En videojuegos, Sliding Window se usa para verificar secuencias de movimientos o acciones recientes del jugador, como "combos" o cadenas de ataques.


//PRÁCTICA: SLIDING WINDOW
function findLongestWord(text) {
    const words = text.split(" ")// TODO: Dividir el texto en palabras y almacenarlas en una variable

    let longestWord = ''; // Inicializar la palabra más larga

    // TODO: Recorrer el arreglo de palabras con un ciclo
    for (let i = 0; i < words.length; i++ ) {
        // TODO: Comparar la longitud de la palabra actual con la más larga
        if (longestWord.length < words[i].length) {
            // Actualizar la palabra más larga
            longestWord = words[i];
        }
    }

    // TODO: Retornar la palabra más larga encontrada
    return longestWord;
}

// Ejemplo de uso
const text = "JavaScript es un lenguaje de programación increíble para aprender.";
// TODO: Llama a la función y muestra el resultado
console.log(findLongestWord(text)); // Resultado esperado: "programación"


function findLongestWordSW(text) {
    let inicio = 0;
    let fin = 0;
    let longestWord = '';

    while (fin <= text.length) {
        if (fin === text.length || text[fin] === ' ') {
            const palabra = text.slice(inicio, fin);
            if (palabra.length > longestWord.length) {
                longestWord = palabra;
            }
            inicio = fin + 1;
        }
        fin++;
    }

    return longestWord;
}

console.log(findLongestWordSW(text)); 