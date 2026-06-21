// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (simula la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 1000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    const nuevoLibro = { titulo, autor, genero, disponible };

    setTimeout(() => {
        // TODO 1: Agrega "nuevoLibro" al arreglo de libros dentro de "biblioteca"
        biblioteca.libros.push(nuevoLibro);

        // TODO 2: Imprime en consola un mensaje confirmando que se agregó el libro
        console.log(`Libro agregado: ${titulo}`);
    }, 1000);
}

// Función para cambiar la disponibilidad de un libro
function actualizarDisponibilidad(titulo, nuevoEstado) {
    setTimeout(() => {
        // TODO 3: Busca dentro de "biblioteca.libros" el libro cuyo título coincida con "titulo"
        const libro = biblioteca.libros.find(
            libro => libro.titulo === titulo
        );

        // TODO 4: Si lo encuentras, cambia su propiedad "disponible" a "nuevoEstado"
         if (libro) {
            libro.disponible = nuevoEstado;

        // TODO 5: Imprime en consola un mensaje confirmando el cambio
        console.log(
                `Disponibilidad actualizada: ${titulo} ahora está ${
                    nuevoEstado ? "Disponible" : "Prestado"
                }`
            );
        }    }, 1000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);