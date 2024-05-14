// Parecido al ejercicio anterior.
// La diferencia es que no vamos a usar el método call,
// ni apply para extender un objeto.
// Vamos a crear una función extender, a la que le pasamos un objeto usuario, 
// y lo que tiene que hacer la función es devolvernos el usuario pero conteniendo 
// los métodos de login y logout

            // const obj = {
            //     nombre: "Gustavo",
            // };

            // function extender (usuario) {

            // };

            // const usuario = extender(obj);

            // console.log(usuario);
            // usuario.login();

const obj = {
    nombre: "Gustavo",
};
            
function extender (usuario) {
    const metodos = {
        login() {
            console.log("Iniciando sesión", this.nombre);
        },
        logout() {
            console.log("Cerrando sesión", this.nombre);
        },
    };

    return Object.assign(usuario, metodos);
            
};
            
const usuario = extender(obj);
            
console.log(usuario);
usuario.login();