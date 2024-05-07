// Vamos a crear una función que toma un array y con el método 
// reduce () va a sumar todos los elementos del array
function sumarTodo(arr) {
    return arr.reduce ((acumulardor, elemento) =>
        acumulardor + elemento);
};

console.log(sumarTodo([1, 2, 3, 4]));


// ¿Si en lugar de pasarle un array le pasamos un objeto?
// Los objetos no tienen método reduce()
// Vamos a usar try y catch en esos casos donde el código 
// podría lanzar un error y este error podría venir de multiples partes
function sumarTodoDeNuevo(arr) {
    return arr.reduce ((acumulardor, elemento) =>
        acumulardor + elemento);
};

try {
    console.log(sumarTodoDeNuevo({prop: 1}));
} catch (error) {
    console.log(error);
};

console.log("Despues del try-catch");   // Vemos que nos muestra este console.log
                                        // Sin el try - catch, ya no hubiera ejecutado
                                        // ningún código después del error
                                        // Se habría roto nuestro código