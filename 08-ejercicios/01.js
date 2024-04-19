// Vamos a construir una función que va a recibir un array de números positivos
// y negativos. Nos tiene que devolver los números absolutos (la versión 
// positiva de esos números)

function paraAbsoluto(arr) {
    return arr.map ((elemento) => Math.abs(elemento));
};

const ns = [-2, 3, 5, -15];

const absolutos = paraAbsoluto(ns);

console.log(absolutos);