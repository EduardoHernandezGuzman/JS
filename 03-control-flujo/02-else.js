//en el caso de que no se ejecute la porción de código del if
//podemos añadir un else para que se ejecute esa otra porción
//de código

// => En los casos que no se ejecute el IF, se ejecutará el ELSE


//Como no se dan las condiciones para que se ejecute el código del if,
//se ejecuta el código del else
let edad = 10;

if (edad > 18) {
    console.log("Usuario mayor de edad")
} else {
    console.log ("Usuario menor de edad")
};


//Añadimos una condición más con el else if
//Las evaluaciones de condiciones se hacen de arriba hacia abajo
//y se va a ejecutar la primera condición que se cumpla y el resto
//van a ser ignoradas
let edad2 = 10;

if (edad2 > 18) {
    console.log("Usuario mayor de edad")
} else if (edad2 < 13) {
    console.log("Usuario necesita se acompañado por un adulto")
} else {
    console.log ("Usuario menor de edad")
};
