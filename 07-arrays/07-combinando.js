// Vamos a ver cómo combinar y dividir arrays.

let array1 = [1, 2, 3, 4];
let array2 = [5, 6, 7, 8];

// concat() nos genera un nuevo array que tenemos que asignarle a una variable
let nuevoArray = array1.concat(array2);
console.log(nuevoArray);

// slice() nos permite dividir un array
// Se le pasa como argumentos donde empieza y acaba
let arrayDividido = nuevoArray.slice(1, 5);
console.log(arrayDividido);

// Si a slice() le pasamos un sólo argumento nos va a coger desde
// índice en adelante
let arrayDivididoNuevo = nuevoArray.slice(3);
console.log(arrayDivididoNuevo);

// Si a slice() no le pasamos ningún argumento, nos hace
// una copia del array
let copiaDelArray = nuevoArray.slice();
console.log(copiaDelArray);
