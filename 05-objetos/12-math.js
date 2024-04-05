// Este es un objeto incluido en JS.
// Math viene con muchas propiedades y objetos (vamos a ver algunos).

console.log(
    Math.PI,    // 3.14
    Math.abs(-150),     // Nos devuelve el valor absoluto de un número
    Math.round(1.85), // Nos permite redondear un número con decimales
    Math.floor(1.9),    // Un redondeo siempre hacia abajo
    Math.ceil(5.2), // Un redondeo siempre hacia arriba
    Math.pow(50, 3),   // Calcula la potencia de un número (50 elevado a 3)
    Math.sqrt(9),   // Nos devuelve la raiz cuadrada
);

console.log(Math.random()); // Nos devuelve un número pseudoaleatorio (entre 0 y 1)





// Una función que nos genera un número aleatorio entre 1 y 9
function getRandom (min, max) {
    return Math.random() * (max - min) + min;
};

console.log(getRandom(1, 9));


// Añado math.floor a la función anterior para que me genere un número entero
function getRandom2 (min, max) {
    return Math.floor (Math.random() * (max - min) + min) 
};

console.log(getRandom2(1, 9));