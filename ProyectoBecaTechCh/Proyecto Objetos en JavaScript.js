let libro = {
    titulo: "Harry Potter 1",
    autor: "J. K. Rowling",
    anio: 1996,
    estado: "disponible",

    describirLibro: function () {
        console.log(
            `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
        );
    }
};
libro.describirLibro();

let libro2 = {
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    anio: 1967,
    estado: "disponible",
    capitulos: [],

    describirLibro: function () {
        console.log(
            `Libro titulado "${this.titulo}", escrito por ${this.autor} en el año ${this.anio}, el estado es: ${this.estado}.`
        );
    },

    agregarCapitulo: function (nombre) {
        this.capitulos.push(nombre);
        console.log(`Capítulo agregado: ${nombre}`);
    },

    eliminarCapitulo: function (nombre) {
        let index = this.capitulos.indexOf(nombre);

        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`Capítulo eliminado: ${nombre}`);
        } else {
            console.log("Capítulo no encontrado.");
        }
    }
};

libro2.describirLibro();

libro2.agregarCapitulo("Introducción");
libro2.agregarCapitulo("Macondo");
libro2.agregarCapitulo("Los Buendía");

console.log(libro2.capitulos);

libro2.eliminarCapitulo("Macondo");

console.log(libro2.capitulos);
