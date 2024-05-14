// Tenemos un objeto que contiene la propiedad nombre.
// Tenemos también una función constructora.
// Vamos a cambiar el contexto de this utilizando el método de call
// Al imprimir en consola tenemos que tener un objeto que 
// sigue teniendo la propiedad de nombre pero que además se le han añadido
// dos métodos (login y logout).

            // const obj = {
            //     nombre: "Gustavo",
            // };

            // function Extender () {

            // };

            // Extender.call(obj);

            // console.log(obj);
            // obj.login();
            // obj.logout();


const obj = {
    nombre: "Gustavo",
};
            
function Extender () {
    this.login = () => {
        console.log("Iniciando sesión", this.nombre);
    }
    this.logout = () => {
        console.log("Cerrando sesión", this.nombre);
    }
           
};
            
Extender.call(obj);
            
console.log(obj);
obj.login();
obj.logout();