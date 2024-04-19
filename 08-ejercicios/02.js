// Tenemos un array con muchos elementos diversos 
// (un string, un número, un objeto, otro array,...).
// Tenemos que crear una función que nos divida por 
// el tipo que contiene el array (en este caso queremos:
// números, strings y objetos).

const miArray = [
    "Hola",
    12,
    "mundo",
    {},
    { id: 15 },
    ["Gustavo"],
];


function dividePorTipo(arr) {
    return {
        string: arr.filter ( (n) => typeof n === "string" ),
        number: arr.filter ( (n) => typeof n === "number"),
        object: arr.filter ( (n) => typeof n === "object" ),
    }
};


const nuevoArray = dividePorTipo(miArray);
console.log(nuevoArray);