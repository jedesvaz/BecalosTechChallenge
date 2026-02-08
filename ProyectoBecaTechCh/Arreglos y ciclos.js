let frutas = [
  "manzana",
  "plátano",
  "naranja",
  "manzana",
  "fresa",
  "uva",
  "plátano",
  "manzana",
  "naranja",
  "uva",
  "fresa",
  "manzana"
];

// Objeto con cantidades iniciando en 0
let cantidades = {
  manzana: 0,
  plátano: 0,
  naranja: 0,
  fresa: 0,
  uva: 0
};
//Usando while
let i = 0;
while (i < frutas.length){
    let frutaInstancia = frutas[i]
    cantidades[frutaInstancia]++;
    i++;
} 

console.log("Cantidad de frutas usando while:");

for (let frutaContador in cantidades){
    console.log(frutaContador + ": " + cantidades[frutaContador]);
}

//Reiniciando JSON
Object.keys(cantidades).forEach(fruta => {
  cantidades[fruta] = 0;
});


//Usando for


for (let i = 0; i < frutas.length; i++){
  let fruta = frutas[i];
  cantidades[fruta]++
}

console.log("Cantidad de frutas usando for:");

for (let fruta in cantidades) {
  console.log(fruta + ": " + cantidades[fruta]);
}