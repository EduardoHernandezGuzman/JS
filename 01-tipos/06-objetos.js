//Personaje de TV

let nombre = "Seiya";
let anime = "Saint Seiya";
let edad = 17;

let personaje = {
    nombre: "Seiya",
    anime: "Saint Seiya",
    edad: 17,
};

//Mostramos todo el objeto personaje
console.log(personaje);

//Dos formas de mostrar el valor de una propiedad
console.log(personaje.nombre); 
console.log(personaje["nombre"]); 

//Podemos modificar el valor de una propiedad
personaje["edad"] = 30;
console.log(personaje);

//Usamos delete para borrar alguna propiedad del objeto
delete personaje.anime;
console.log(personaje);