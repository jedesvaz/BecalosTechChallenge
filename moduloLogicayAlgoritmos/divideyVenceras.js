// Divide and Conquer (Divide y Vencerás)
 
// Paradigma de diseño de algoritmos que resuelve problemas dividiéndolos en partes más pequeñas,
// resolviéndolas recursivamente y combinando sus soluciones para resolver el problema original
 
// -------------------------------------------------------
// CÓMO FUNCIONA
// Se basa en tres pasos fundamentales:
//     1) Dividir: el problema grande se divide en subproblemas más pequeños y similares al original
//     2) Conquistar: los subproblemas se resuelven, generalmente usando recursión
//     3) Combinar: las soluciones de los subproblemas se combinan para formar la solución final
 
// -------------------------------------------------------
// EJEMPLO: Suma de un arreglo
 
// function sumArray(arr) {
//     // Caso base: si el arreglo tiene un solo elemento
//     if (arr.length === 1) {
//         return arr[0];
//     }
 
//     // Dividir: dividimos el arreglo en dos mitades
//     const mid = Math.floor(arr.length / 2);
//     const left = arr.slice(0, mid);
//     const right = arr.slice(mid);
 
//     // Conquistar: calculamos la suma de cada mitad recursivamente
//     const leftSum = sumArray(left);
//     const rightSum = sumArray(right);
 
//     // Combinar: sumamos los resultados
//     return leftSum + rightSum;
// }
 
// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // 15
 
// -------------------------------------------------------
// EJEMPLO CLÁSICO: Merge Sort
// Algoritmo de ordenamiento que usa Divide and Conquer
// -Divide el arreglo en mitades hasta que cada parte tenga un solo elemento
// -Conquista combinando los elementos de forma ordenada
// -Combina las mitades ordenadas para formar un arreglo completamente ordenado
 
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr; // Caso base
 
//     // Dividir
//     const mid = Math.floor(arr.length / 2);
//     const left = mergeSort(arr.slice(0, mid));
//     const right = mergeSort(arr.slice(mid));
 
//     // Combinar
//     return merge(left, right);
// }
 
// function merge(left, right) {
//     let result = [];
//     let i = 0, j = 0;
 
//     while (i < left.length && j < right.length) {
//         if (left[i] < right[j]) {
//             result.push(left[i++]);
//         } else {
//             result.push(right[j++]);
//         }
//     }
 
//     return result.concat(left.slice(i)).concat(right.slice(j));
// }
 
// const array = [5, 2, 9, 1, 5, 6];
// console.log(mergeSort(array)); // [1, 2, 5, 5, 6, 9]
 
// -------------------------------------------------------
// CASOS DE USO EN LA VIDA REAL
 
// -Planificación de eventos: dividir un evento en áreas (logística, catering, invitados)
//  y manejar cada área por separado antes de unificarlas
// -Bases de datos: dividir grandes conjuntos de datos para analizarlos y unir los resultados
// -Procesamiento de imágenes: dividir una imagen en bloques para comprimirlos y luego combinarlos
// -Toma de decisiones: al planear un viaje, resolver por separado transporte, alojamiento y actividades

function findMax(arr) {
  // Caso base: si el arreglo tiene un solo elemento, ese es el máximo
  if (arr.length === 1) {
    return arr[0];
  }

  // Dividir el arreglo en dos mitades
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  // Llamar recursivamente para encontrar el máximo en cada mitad
  const leftMax = findMax(left);
  const rightMax = findMax(right);

  // Combinar: retornar el mayor de los dos máximos
  return leftMax > rightMax ? leftMax : rightMax;
}

// Ejemplo de entrada
const numbers = [30, 8, 2, 10, 5, 7];
console.log(findMax(numbers)); // Salida esperada: 10