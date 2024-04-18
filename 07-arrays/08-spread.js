// Podemos combinar varios arrays con el spread operator 

let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

let nuevoArray = [...array1, ...array2];

console.log(nuevoArray);


// Además podemos añadir más elementos al array de esta manera

let arreglo1 = ["c", "d", "e"];
let arreglo2 = ["h", "i", "j"];

let nuevoArreglo = ["a", "b", ...arreglo1, "f", "g", ...arreglo2];

console.log(nuevoArreglo);