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