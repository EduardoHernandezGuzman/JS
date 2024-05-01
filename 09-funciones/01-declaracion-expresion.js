// Declaración de funciones. Lo hacemos con la 
// palabra reservada function

// Esto es una función nombrada (named function)
function suma () {
    console.log("Sumando ...");
};

// Función anónima (anonymous function)
// function () {
//     console.log("Función anónima ...");
// };

// Expresión de función (function expression)
// Expresión de función anónima
let resta = function () {
    console.log("Restando ...");
};

// Función de expresión nombrada (named function expression)
let multiplica = function multi () {
    console.log("Multiplicando ...");
};

// Fat arrow function (función flecha)
// Siempre va a ser anónima
const divide = () => {
    console.log("Dividiendo ...");
};