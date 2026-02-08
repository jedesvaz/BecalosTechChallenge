let librosLeidos = [];

function agregarLibro(titulo){
    librosLeidos.push(titulo);
}

agregarLibro("The Rise of Kyoshi");
agregarLibro("Dune");
agregarLibro("Pioneers");


function mostrarLibrosLeidos(){
    console.log("Libros leídos:");

    for(let i = 0; i < librosLeidos.length; i++){
        console.log(librosLeidos[i])
    }
}

mostrarLibrosLeidos()