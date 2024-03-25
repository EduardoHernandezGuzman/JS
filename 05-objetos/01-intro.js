// Vamos a declarar 3 variables
let email = "gustavo@gatito.com";
let name = "Gustavo";
let direccion = {
    calle : "Calle Gatilandia",
    numero: 23,
};

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
        console.log("Recuperando la clave")
    }, 
};
