// Vamos a declarar 3 variables
let email = "gustavo@gatito.com";
let name = "Gustavo";
let direccion = {
    calle : "Calle Gatilandia",
    numero: 23,
};

// Los objetos en JavaScript son colecciones de pares de clave-valor, 
// donde cada clave es única y asociada a un valor. Los valores pueden 
// ser de cualquier tipo de dato, incluyendo otros objetos, funciones, arreglos, 
// números, cadenas de texto, booleanos, ...


// Las 3 varibles están relacionadas porque son datos de un usuario.
// Podemos usar un objeto para agrupar todos estos datos dentro de un objeto.
let user = {
    email: "gustavo@gatito.com",
    name: "Gustavo",
    direccion: {
        calle: "Calle Gatilandia",
        numero: 23,
    },
    activo: true,
    recuperarClave: function () {    // función anónima
        console.log("Recuperando la clave..."); 
    }, 
};


// En la POO (Programación Orientada a Objetos), los objetos se utilizan 
// para modelar entidades del mundo real y las interacciones entre ellas. 
// El objetivo principal es organizar el código de una manera más modular 
// y estructurada, lo que facilita la reutilización, la modificación y
// el mantenimiento del software.