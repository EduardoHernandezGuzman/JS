// Construir una función (llamada toPairs) que tome un array que contiene 
// un listado de objetos y devolver un array de pares (un array de arrays)

// Este es un array de pares
                    // const coordenadas = [
                    //     [0, 0],
                    //     [3, 5],
                    //     [-2, 1],
                    //     [7, -4]
                    // ];

// Tenemos que obtener algo así: Un array de arrays que contiene como primer elemento
// un identificador (1, 2, 3) (el id) y el segundo elemento va a ser el objeto completo

            // let pares = [
            //     [1,  {id: 1, name: "Nicolás"}],
            //     [2,  {id: 2, name: "Felipe"}],
            //     [3, {id: 3, name: "Manolo"}],
            // ];


let array = [ {
    id: 1,
    name: "Nicolás",
}, {
    id: 2,
    name: "Felipe",
},{
    id: 3,
    name: "Manolo",
} ];


function toPairs(arr) {
    let pairs = [ ];
    for (let i = 0; i < arr.length; i++) {
        let elemento = arr[i];
        pairs[i] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs (array);
console.log(resultado);






// Sin utilizar una función

let pairs2 = [ ];
for (let z = 0 ; z < array.length ; z++) {
    pairs2.push([array[z].id, array[z]]);
}
console.log(pairs2);