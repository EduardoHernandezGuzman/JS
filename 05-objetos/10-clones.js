// Vamos a ver cómo clonar objetos.

// Queremos clonar este objeto dentro de otro objeto.
let punto = {
    x: 10,
    y: 15,
};

//Aquí estamos monstrando el objeto anterior y le hemos añadido la propiedad z.
Object.assign(punto, { z: 20});
console.log(punto);





// Otro ejemplo de uso
// En este ejemplo, objetoDestino se modifica para tener las propiedades de 
// objetoFuente1 y objetoFuente2. La propiedad "b" es sobrescrita por el valor 
// de objetoFuente2, ya que es la fuente más reciente.
const objetoDestino = {};

const objetoFuente1 = { a: 1, b: 2 };
const objetoFuente2 = { b: 3, c: 4 };

Object.assign(objetoDestino, objetoFuente1, objetoFuente2);

console.log(objetoDestino); 


// Podemos usar assign para clonar un objeto, de la siguiente manera
let punto2 = {
    x: 100,
    y: 150,
};

let clonePunto = Object.assign( {}, punto2, { z: 200} ); // añadiendo un {} vacío
console.log(clonePunto);


// La forma actual de hacer una copia es con el spred operator
let punto3 = {
    x: 1000,
    y: 1500,
};

let clonPunto3 = {... punto3};
console.log(clonPunto3);

