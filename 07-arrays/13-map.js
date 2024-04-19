// Con map() creamos nuevos arrays partiendo de otro array existente

// Vamos a crear un nuevo array de los nombres envueltos en un <li> 
const usuarios = [
    { edad: 17, nombre: "Gustavo"},
    { edad: 25, nombre: "Dorito"},
    { edad: 12, nombre: "Canelo"},
    { edad: 64, nombre: "Drago"},
];

const listado = usuarios.map( (usuario) => {
    return `<li>${usuario.nombre}</li>`;
} );

console.log(listado);

// Aquí tenemos el texto preparado para ser insertado en nuestro .html
const HTML = `<ol>${listado.join(" ")}</ol>`
console.log(HTML);




// También podemos usar map() para crear nuevos objetos a partir de objetos ya existentes
const mapped = usuarios.map ( (u) => {
    return {
        ...u,  // Copia de este objeto de usuario
        mayor: u.edad > 18,  // La nueva propiedad que queremos agregar
    }
});

console.log(mapped);




// También podemos encadenar varios métodos. 
// Vamos a encadenar el filter() y map()
// Estamos filtrando por mayoría de edad y luego preparando un 
// texto para ser insertado en nuestro .html

const nuevoListado = usuarios
    .filter(u => u.edad > 18)
    .map(u => `<li>${u.nombre}</li>`);

const nuevoHTML = `<ol>${nuevoListado.join(" ")}</ol>`;

console.log(nuevoHTML);