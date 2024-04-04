// En las funciones constructoras se usa UpperCamelCase

// Queremos crear el siguiente objeto
            // { id: 1, 
            // recuperarClave:  function ( ){ } }

function Usuario () {
    this.id = 1;
    this.recuperarClave = function ( ) {
        console.log("Recuperando la clave..."); 
    }
};

let usuario01 = new Usuario();

console.log(usuario01);


// Creamos una función creadora Alumno
function Alumno (nombre, edad, curso,) {
    this.name = nombre;
    this.age = edad;
    this.course = curso;
};

// Creamos 3 instancias de alumno
let david = new Alumno ("David", 19, "2024");
let roberto = new Alumno ("Roberto", 29, "2024");
let manuel = new Alumno ("Manuel", 42, "2024");

console.log(david);
console.log(roberto);
console.log(manuel);