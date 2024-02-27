//Array vacío de personajes
let personajes = [];
console.log(personajes);

//Array de dos elementos
//Cerdo tiene el índice 0 y caballo tiene el índice 1
let animales = ["cerdo" , "caballo"];
console.log(animales);
//Aquí estamos accediendo al primer elemento del array
console.log(animales[0]);

//Añadimos un nuevo elemento al array en el índice 2
animales[2] = "paloma";
console.log(animales);

//Añadimos un elemento al array en el índice 10
//Por lo tanto tenemos un array con una longitud de 11
//donde nos dice que hay 7 elementos vacíos
animales[10] = "dragón";
console.log(animales);

//Con length sacamos la longitud del array
console.log(animales.length);

