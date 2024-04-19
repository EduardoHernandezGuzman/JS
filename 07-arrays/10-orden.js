// Vamos a reoordenar arrays

let numeros = [15, 19, -123];


// El método sort() nos los ordena de menor a mayor
numeros.sort();
console.log(numeros);

// El método reverse() nos los ordena de mayor a menor
numeros.reverse();
console.log(numeros);



// También podemos usarlos con letras
let letras = ["b", "e", "a", "d", "c"];

letras.sort();
console.log(letras);

letras.reverse();
console.log(letras);



// Aquí encontramos un "problema"
let letrasMayusculas = ["B", "e", "a", "d", "c"];

letrasMayusculas.sort();
console.log(letrasMayusculas); // Nos muestra en primer lugar la "B"
                               // En el código ASCII la "B" está antes de la "a"
// Para solucionar ese inconveniente hacemos lo siguiente
letrasMayusculas.sort((x, y) => {
    // Si quieres que "x" esté antes de "y" tienes que devolver -1
    // Si quieres que "y" esté antes de "x" tienes que devolver 1
    // Si son iguales tienes que devolver 0
    let xlower = x.toLowerCase();
    let ylower = y.toLowerCase();

    if (xlower < ylower) {
        return -1;
    }
    if (xlower > ylower) {
        return 1;
    }
    return 0;
});

console.log("Problema solucionado", letrasMayusculas);


// Vamos a usar esta funcionalidad cuando trabajemos con un array de objetos
let usuarios = [
    {edad: 30, nombre: "Gustavo"},
    {edad: 17, nombre: "Dorito"},
    {edad: 21, nombre: "Canelo"},
];

usuarios.sort((a, b) => {
    if (a.edad < b.edad) {
        return -1
    }
    if (a.edad > b.edad) {
        return 1
    }
    return 0;
});

console.log("Usuarios ordenados por edad", usuarios);