// Parámetros y argumentos dentro de Javascript

function suma (a, b) {
    return a + b;
};

console.log(suma(1, 2));



// ¿Qué ocurre si sólo le pasamos un argumento?
function otraSuma (a, b) {
    return a + b;
};

console.log(otraSuma(1, )); // Nos devuelve NaN (Not a Number)



// ¿Qué ocurre si le pasamos más argumentos?
function otraSumaMas (a, b) {
    return a + b;
};

console.log(otraSumaMas(1, 2, 3, 4, 5)); 


function otraSumaMas2 (a, b) {
    console.log(arguments);  // Vamos a hacer un console.log de la palabra reservada arguments
};                           // Esto es un Iterator

console.log(otraSumaMas2(1, 2, 3, 4, 5)); 

function otraSumaMas3 (a, b) {      // Así vamos a acceder a todos los argumentos y 
    let total = 0;                  // sumar todos los parámetros
    for (let valor of arguments) {
        total = total + valor;
    }
    return total;
};

console.log(otraSumaMas3(1, 2, 3, 4, 5));         


// Forma más moderna de iterar todos los argumentos
function otraSumaMas4 (a, b) {
    return Array.from(arguments).reduce((acumulador, elemento) => acumulador + elemento);      
};

console.log(otraSumaMas4(1, 2, 3, 4, 5));