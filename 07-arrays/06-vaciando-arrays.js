// Cuatro formas de quitar los elemento de un array

// Asignándolo a un array vacío (forma poco recomendable)
let arreglo1 = ["elemento1", "elemento2"];
arreglo1 = [];
console.log(arreglo1);
 
// Manipulando la longitud de nuestro array 
let arreglo2 = ["elemento3", "elemento4"];
arreglo2.length = 0;
console.log(arreglo2);

// Utilizando splice()
let arreglo3 = ["elemento5", "elemento6"];
arreglo3.splice(0, arreglo3.length);
console.log(arreglo3);