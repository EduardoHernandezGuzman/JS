// Las funciones en JavaScript se consideran objetos (objetos de primera clase)

// Por lo tanto las 1.- funciones tienen propiedades,  2.- pueden ser asignadas 
// a otras variables, 3.- pasadas como argumentos a otras funciones 
// o 4.- retornadas de otras funciones.


function Usuario(nombre) {
    this.nombre = nombre;
};

// 1.- Las funciones tienen propiedades
console.log(Usuario.name);  // la propiedad name nos devuelve el nombre de la función
console.log(Usuario.length);  // la propiedad lenght nos devuelve la cantidad de 
                                               // argumentos que recibe la función


// 2.- También podemos tomar una función y asignarsela a una variable
const U = Usuario
let user = new U ("Gustavo");

console.log(user);


// 3.- También podemos pasar las funciones como argumentos
function of(Fn, arg) {
    return new Fn(arg);
};

let user1 = of(Usuario, "Dorito");
console.log(user1);

// 4.- También podemos retornarlas dentro de otras funciones
function returned() {
    return function() {
        console.log("Hola mundo");
    }
}

let saludo = returned();
saludo();