export let destinos = []; //Generación de un array para almacenar los destinos


//Función para registrar un nuevo destino, recibe el destino, fecha y transporte como parámetros

export const  registrarDestino = (destino, fecha, transporte) => {
    const nuevoViaje = {
        destino: destino,
        fecha: fecha,
        transporte: transporte,
        costo: calcularCosto(destino, transporte) //Llamada a la función calcularCosto para obtener el costo del viaje basado en el destino y el transporte
    };
    destinos.push(nuevoViaje);
}

//Función para calcular el costo del viaje basado en el destino y el transporte
export const calcularCosto = (destino, transporte) => {
    let costoBase = 0;
    if (destino === "Paris") costoBase = 500;
    else if (destino === "Londres") costoBase = 400;
    else if (destino === "New York") costoBase = 600;
    else if (destino === "CDMX") costoBase = 600;
    if (transporte === "Avión") costoBase += 200;
    else if (transporte === "Tren") costoBase += 100;
    else if (transporte === "Camión") costoBase += 50;
    return costoBase;
}

export const mostrarItinerario = () => {
    for (let i = 0; i < destinos.length; i++) { //length es una propiedad de los arrays que devuelve el número de elementos que contiene
        let viaje = destinos[i];
        console.log("Destino: " + viaje.destino);
        console.log("Fecha: " + viaje.fecha);
        console.log("Transporte: " + viaje.transporte);
        console.log("Costo: $" + viaje.costo);
        console.log("---------------------------");
    }
}



//PRACTICA: ESTRUCTURA DE DATOS

export let listaDeCompras = new Set();

export const agregarProducto = (listaDeCompras, producto) => {
    listaDeCompras.add(producto);
} 

export const eliminarProducto = (listaDeCompras, producto) => {
    listaDeCompras.delete(producto);
}

export const mostrarLista = (listaDeCompras) => {
    console.log("Lista de Compras:");
    listaDeCompras.forEach(producto => {
        console.log("- " + producto);
    });
}


//PRACTICA: MÉTODOS DE ARREGLOS
export const menosDeCienF = (arregloConObjetos) => {
    return arregloConObjetos.filter(producto => producto.precio < 100);
    
};


export const ordenarListaporOrdenAlfa = (arreglo) => {
    arreglo.sort((producto1, producto2) => {
    if(producto1.nombre < producto2.nombre) return -1;
    if(producto1.nombre > producto2.nombre) return 1;
    return 0;
});
};

export const soloNombresF = (arregloConObjetos) =>{
    return arregloConObjetos.map(producto => producto.nombre);
};