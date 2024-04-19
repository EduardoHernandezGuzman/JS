// El método reduce() se utiliza para reducir el contenido de un array a un solo valor.
const numeros = [1, 2, 3, 4];

const suma = numeros.reduce((acumulador, elementoQueItereamos) => {
    return acumulador + elementoQueItereamos;
}, 0);  // 0 es el valor incial del acumulador

console.log(suma);


// También nos sirve para aplanar un array
const anidado = [[1, 2], 3, [4, 5]];

const plano = anidado.reduce ((acc, elem) => {
    return acc.concat(elem);
} , []);

console.log(plano);


// También nos sirve cuando tengamos un array muy grande y por ejemplo queramos
// buscar algo con el método find(), esta iteración podría tardar unos segundos
// en resolverse.
// Es por ello que podemos crear un índice para ayudarnos con esto.
const usuarios = [
    { edad: 17, nombre: "Gustavo"},
    { edad: 25, nombre: "Dorito"},
    { edad: 12, nombre: "Canelo"},
    { edad: 64, nombre: "Drago"},
];

const indexado = usuarios.reduce((acc, elem) => ({
    ...acc,
    [elem.nombre]:elem,
}), {});

console.log(indexado);

// Ahora podemos acceder a un objeto por su índice (por ejemplo indexado["Dorito"])
console.log(indexado["Dorito"]);