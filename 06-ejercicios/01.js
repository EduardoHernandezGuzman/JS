// Tenemos una función constructora para crear usuarios.
// Vamos a crear objetos de tipo usuario.
// Vamos a usar math.random para generar unos ids para los usuarios

                // function Usuario(name) {

                // };

                // let user = new Usuario ("Felipe");
                // let user2 = new Usuario ("Gustavo");

                // console.log(user, user2, );

function Usuario(name) {
    // this.id =  Math.random();    Con esto ya tengo un id
    this.id = Math.floor( Math.random() * 100);     // Aquí le pido que me genere un número entre 1 y 100
    this.nombre = name;
    
};

let user = new Usuario("Felipe");
let user2 = new Usuario("Gustavo");

console.log(user, user2,);