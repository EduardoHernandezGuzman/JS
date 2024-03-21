// Crear un algoritmo que devuelva el número menor y mayor
// de un array. Nos tiene que devolver un array con esos números (-100 y 55)

//      let array = [2, 5, 7, 15, -5, -100, 55];

// Utilizamos FOR
let array = [2, 5, 7, 15, -5, -100, 55];
let numeroMayor = array[0];
let numeroMenor = array[0];

    for ( let i = 1 ; i < array.length ; i++) {
        if (array [i]> numeroMayor) {
            numeroMayor = array [i]
        }
    };

    for (let z= 1 ; z < array.length ; z++) {
        if (array[z] < numeroMenor) {
            numeroMenor = array [z]
        }
    };

console.log("El número mayor del array es el" , numeroMayor);
console.log("El número menor del array es el" , numeroMenor);



// Utilizamos un FOR OF
let array2 = [23, 55, 76, 157, -58, -1009, 505];
let numeroPequeño = array2[0];

for (menor of array2) {
    numeroPequeño = numeroPequeño < menor ? menor : numeroPequeño;
}
console.log("El número más pequeño del array es" , numeroPequeño);