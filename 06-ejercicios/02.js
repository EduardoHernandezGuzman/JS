// Ejercicio parecido al anterior.
// Pero en este caso vamos a usar una Factory Function.
// Tenemos que generar unos ids para los usuarios.

                // function createUsuario () {

                // };

                // let user = createUsuario("Gustavo");
                // let user2 = createUsuario("Dorito");

                // console.log(user, user2);

function createUsuario (name, id) {
    return {
        name : name,
        id : Math.floor( Math.random() *100) ,
    }
};
                
let user = createUsuario("Gustavo");
let user2 = createUsuario("Dorito");
                
console.log(user, user2);