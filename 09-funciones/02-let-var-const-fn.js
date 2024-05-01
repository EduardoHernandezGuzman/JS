console.log(saludo);
console.log(vieja);  // var nos va a dar un problema de hoisting
console.log(hola);
console.log(adios);

function saludo () {};
let hola = "hola";
const adios = "adios";
var vieja = "ya no se usa var";

// Para evitar problemas de hoisting, siempre 
// utilizar let y const