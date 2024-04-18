// Estamos definiendo una función clásica
function saludo() {
    return "Hola mundo";
};

console.log(saludo());


// Vamos a definir una arrow funtion que haga lo mismo que la otra.
// Es una función anónima y por eso se le asigna a una variable o constante.
const otroSaludo = () => {
    return "Hola mundo de nuevo"
}

console.log(otroSaludo());


// Esta arrow funtion es igual a la anterior, pero en este caso tiene
// un return implícito. Una función flecha tiene un retorno implícito 
//cuando la expresión que devuelve no está encerrada entre llaves.
// Si la función flecha contiene múltiples líneas de código o si deseas 
//realizar múltiples operaciones, entonces necesitarás usar llaves 
const masSaludos = () => "Hola una vez más";
console.log(masSaludos());


// Arrow funtion que recibe un parámetro
const saludoConParametro = (nombre) => "Hola " + nombre + " un saludo";
console.log(saludoConParametro("Gustavo"));