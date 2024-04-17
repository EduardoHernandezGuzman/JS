// Tenemos un array almacenado en una constante
// No podemos modificar el valor de la constante, pero podemos
// modificar el contenido de la constante.
// Con el método .push() podemos agregar elementos al final de un array.

const letras = ["c", "d"];

letras.push("e");
console.log(letras);


// Con el método .unshift() podemos agregar un elemento al inicio del array.
letras.unshift("a", "b");
console.log(letras);

// ¿Cómo agrego un elemento entre c y d?. Usando .splice()
 letras.splice(3,0,"1", "2");
 console.log(letras);