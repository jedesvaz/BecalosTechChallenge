const cowsay = require('cowsay');
 
// Mensaje básico
console.log(cowsay.say({
    text: "Hola! Soy una vaca programadora"
}));
 
// La vaca con ojos muertos (x)
console.log(cowsay.say({
    text: "Me quedé sin café...",
    e: "xx", // ojos
    T: "U "  // lengua
}));
 
// La vaca pensando en lugar de hablando
console.log(cowsay.think({
    text: "Hmm... y si uso async/await?"
}));
console.log(cowsay.say({
    text: "Soy Tux, el pingüino de Linux!",
    f: "tux"
}));
console.log(cowsay.say({
    text: "MMM Rosquillas",
    f: "homer"
}));
console.log(cowsay.say({
    text: "MMM Rosquillas",
    f: "mona-lisa"
}));


// Ver cuántos personajes hay y sus nombres
function get_cows(error, cow_names) {
    if (error) {
        console.log(error);
    } else if (cow_names) {
        console.log(`Personajes disponibles: ${cow_names.length}`);
        console.log(cow_names); // imprime todos los nombres
    }
}

cowsay.list(get_cows);