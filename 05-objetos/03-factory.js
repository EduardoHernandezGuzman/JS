// Tenemos este objeto.
// Ahora queremos crear otro usuario siguiendo esta plantilla.
// Aquí es donde entran las Factory Functions.

                    // let user = {
                    //     email: "gustavo@gatito.com",
                    //     name: "Gustavo",
                    //     direccion: {
                    //         calle: "Calle Gatilandia",
                    //         numero: 23,
                    //     },
                    //     activo: true,
                    //     recuperarClave: function () {  
                    //         console.log("Recuperando la clave..."); 
                    //     }, 
                    // };

                    
// Definimos nuestra factory funtion
function crearUsuario (name, email) {
    return {
        email: email,
        name: name,
        activo: true,
        recuperarClave: function () {  
            console.log("Recuperando la clave..."); 
        }, 
    };
}; 

// Aquí estamos creando 3 usuarios usando la factory funtion
let usuario1 = crearUsuario ("Gustavo", "gustavo@gatito.com");
let usuario2 = crearUsuario ("Dorito", "dorito@gatito.com");
let usuario3 = crearUsuario ("Pepe", "pepe@humano.com");

console.log(usuario1, usuario2, usuario3);