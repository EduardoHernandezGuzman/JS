// el método filter() nos sirve para filtar arrays y así poder eliminar
// elementos que no necesitamos

const usuarios = [
    { edad: 17, nombre: "Gustavo"},
    { edad: 25, nombre: "Dorito"},
    { edad: 12, nombre: "Canelo"},
    { edad: 64, nombre: "Drago"},
];

// Vamos a seleccionar por ejemplo sólo a los mayores de edad
const mayoresDeEdad = usuarios.filter((usuario) => {
    return usuario.edad > 18;
} );

console.log("Tienen más de 18 años", mayoresDeEdad);

// Vamos a seleccionar los menores de edad
const menoresDeEdad = usuarios.filter((usuario) => {
    return usuario.edad < 18;
});

console.log("Tienen menos de 18 años", menoresDeEdad);