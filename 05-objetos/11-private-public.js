// Cuando usamos una función constructora para crear objetos, a veces vamos
// a querer que algunos de sus métodos o propiedades sean privados para
// que no puedan ser accedidos desde afuera.
// Lo que asignemos a la palabra reservada this, va a ser público y vamos a poder acceder a ellos.


function Usuario ( ) {
    this.nombre = "Pepillo";
    this.apellido = "Perez";
    let id = 1
    this.guardar = function ( ) { console.log("Guardando datos importantes..."); };
};

const usuario1 = new Usuario();
console.log(usuario1.nombre);  // Estamos accediendo a la propiedad nombre (porque usa this)
console.log(usuario1.id);  // no está asignada a this, por lo que no es accesible desde fuera del 
                                         // objeto creado con la función constructora.



