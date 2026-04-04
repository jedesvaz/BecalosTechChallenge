// Recursión y Backtracking

// La recursión y el backtracking son técnicas fundamentales para resolver problemas complejos
// dividiéndolos en partes más pequeñas

// -------------------------------------------------------
// RECURSIÓN
// Técnica donde una función se llama a sí misma
// Se usa para resolver problemas dividiéndolos en subproblemas más pequeños del mismo tipo
// Requiere:
//     -Caso base: condición que detiene la recursión
//     -Llamada recursiva: la función se llama a sí misma con una versión más simple del problema

// Ejemplo: Factorial de un número
// El factorial de n (n!) es el producto de todos los enteros positivos desde 1 hasta n

function factorial(n) {
    // Caso base: si n es 0, el factorial es 1
    if (n === 0) {
        return 1;
    }
    // Llamada recursiva: multiplica n por el factorial de n-1
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Explicación:
// factorial(5) calcula 5 * factorial(4), y así sucesivamente
// Cuando llega a factorial(0), devuelve 1 y se detiene la recursión

// -------------------------------------------------------
// BACKTRACKING
// Técnica para resolver problemas de búsqueda y optimización
// Explora todas las posibilidades y retrocede cuando una solución parcial no puede
// conducir a una solución completa
// Utiliza recursión para explorar las soluciones
// Cómo funciona:
//     1) Exploración: se toma una posible solución y se prueba
//     2) Validación: si no funciona, se retrocede y se prueba otra opción
//     3) Determinación: si se encuentra una solución válida, se almacena o se muestra

// Ejemplo: Generar todas las combinaciones posibles de un conjunto de letras

function generateCombinations(letters, current, index, results) {
    results.push(current); // Agregar la combinación actual al resultado

    for (let i = index; i < letters.length; i++) {
        // Llamar recursivamente añadiendo la letra actual
        generateCombinations(letters, current + letters[i], i + 1, results);
    }
}

function findAllCombinations(letters) {
    const results = [];
    generateCombinations(letters, '', 0, results);
    return results;
}

const letters = ['a', 'b', 'c'];
console.log(findAllCombinations(letters));
// Salida: ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']

// Explicación:
// -generateCombinations agrega letras una por una a la combinación actual
// -En cada paso, se añade la combinación actual al arreglo de resultados
// -Luego se recorre el resto del arreglo para añadir más letras
// -Cuando termina con una combinación, retrocede y prueba la siguiente
// -La recursión termina cuando se han explorado todas las letras desde el índice actual

// -------------------------------------------------------
// CASOS DE USO EN LA VIDA REAL

// Recursión:
//     -Navegación de carpetas: buscar archivos en un sistema de directorios
//     -Datos jerárquicos: árboles genealógicos, menús desplegables
//     -Cálculos repetitivos: factorial, sucesión de Fibonacci

// Backtracking:
//     -Resolución de puzzles: Sudoku, laberintos, problema de las 8 reinas
//     -Planificación de rutas: encontrar caminos posibles entre ciudades
//     -Organización: optimizar el empaque de objetos


//PRÁCTICA: RECURSIÓN

// Copy code
// Lista de regalos
const gifts = ["Muñeca","Camión", "Carro de juguete", "Rompecabezas", "Lego", "Pelota"];

function findGift(gifts, giftName, index = 0) {
  // Caso base 1: Si llegamos al final de la lista, el regalo no está
  if (index === gifts.length) {
    return `${giftName} no está en la lista.`;
  }

  // Caso base 2: Si encontramos el regalo, devolvemos su posición
  if (gifts[index] === giftName) {
    return `${giftName} está en la posición ${index + 1}.`;
  }

  // Llamada recursiva: seguimos buscando en el siguiente índice
  return findGift(gifts, giftName, index + 1);
}

// Casos de ejemplo:
let giftToFind = "Lego";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Lego está en la posición 4."

giftToFind = "Camión";
console.log(findGift(gifts, giftToFind));
// Salida esperada: "Camión no está en la lista."