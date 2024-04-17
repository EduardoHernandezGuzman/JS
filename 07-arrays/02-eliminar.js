//vamos a quitar el último elemento de un array usando el método pop()
// Esa letra que sacamos vamos a asignarsela a una variable.

const letras = ["a", "b", "c", "d", "e", "f", "g", "h"];

let letraElimninada = letras.pop();

console.log("Hemos eliminado la letra", letraElimninada);
console.log(letras);


// También podemos utilizar el método shift()

let otraLetraEliminada = letras.shift(); // Aquí almacenamos la letra eliminada

console.log("Ahora hemos eliminado la letra", otraLetraEliminada);
console.log(letras);

// ¿Cómo elimino elementos a mitad del array (c y d por ejemplo)?. Utilizando splice()
// .splice ( indice donde comenzamos , elementos a borrar , elementos que queremos agregar )

letras.splice(1,2);
console.log(letras);