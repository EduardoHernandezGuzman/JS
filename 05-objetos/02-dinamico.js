// Los objetos son dinámicos (se le pueden agregar o quitar propiedades a tu antojo), 
// además de cambiarles su valor en cualquier momento.

const user = {
    id: 1,
};

// user = 10;   Esto no puedo hacerlo, porque no puedo cambiar el valor de esta constante

// Lo que si puedo es añadir propiedades o quitarle propiedades a un objeto
user.name = "Gustavo";
user.guardar = function ( ) {
    console.log("Guardando", user.name);
};

user.guardar( );



// Aquí estamos eliminando las propiedades name y guardar
delete user.name;
delete user.guardar;

console.log(user);



// Podemos hacer que no se pueda modificar un objeto usando freeze
const usuario =  Object.freeze ({ id: 2 });     // Definimos el objeto usando freeze
usuario.nombre = "Rubén";   // Añadimos la propiedad nombre
console.log(usuario);   // Vemos que no nos la añade



// Si queremos cambiar los valores de las propiedades sin poder añadir o quitar propiedades
// utilizaremos seal
const usuarioNuevo =  Object.seal ({ id: 3 });
usuarioNuevo.nombre = "Pedro";      // Añadimos la propiedad nombre y vemos que no la añade
usuarioNuevo.id = 200;  // Le damos un nuevo valor al id, y vemos que sí nos lo modifica
console.log(usuarioNuevo);   