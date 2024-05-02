// Nos traemos la función de 04-arguments.js
// Y vamos a transformarla a una fat arrow function
function suma (a, b) {
    return Array.from(arguments).reduce((acumulador, elemento) => acumulador + elemento);      
};

console.log(suma(1, 2, 3, 4, 5));

// Nos va a dar error
// Las fat arrow function no tienen ARGUMENTS
const sumaArrow = (a, b) => {
    return Array.from(arguments).reduce((acumulador, elemento) => acumulador + elemento);      
};

console.log(sumaArrow(1, 2, 3, 4, 5));