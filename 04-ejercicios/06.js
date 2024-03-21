// Crear un algoritmo que devuelva los números
// positivos de un array

let array = [2, 5, 7, 15, -5, -100, 55];

for (let i = 0 ; i < array.length ; i++) {
    if(array[i] > 0) {
        console.log(array[i]);
    };
};


// Crear un algoritmo que devuelva  la cantidad de número positivos
// que hay en un array

let array2 = [2, 5, 7, 15, -5, -100, 55];

let cantidadPositivos = 0;

for (let z = 0 ; z < array2.length ; z++) {
    if (array2[z] > 0) {
        cantidadPositivos ++;
    };
};

console.log("En el array hay un total de " , cantidadPositivos , "números positivos")



// Crear un algoritmo que devuelva  la cantidad de número positivos
// que hay en un array utilizando una FUNCIÓN y FOR OF

let array3 = [2, 5, 7, 15, -5, -100, 55];

function cuantosPositivos () {
    let positivos = 0;
    for (positivo of array3) {
        if (positivo > 0) {
            positivos ++
        };
    };
    return positivos;
};

let resultado = cuantosPositivos ();
console.log("Tenemos " , resultado, "positivos");


