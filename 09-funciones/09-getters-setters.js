// Vamos a acceder a la propiedades de este objeto
const usuario = {
    nombre: "Gustavo",
    apellido: "Hernández",
};

console.log(`${usuario.nombre} ${usuario.apellido}`);


// Otra forma de hacer lo anterior es crear un método dentro del objeto
// (Las funciones dentro de un objeto se llaman métodos)
const otroUsuario = {
    nombre: "Dorito",
    apellido: "Hernández",
    nombreCompleto: function () {
        return `${otroUsuario.nombre} ${otroUsuario.apellido}` 
    },
    nombreCompeto2 () { // Esta es una forma corta de expresar métodos 
        return `${otroUsuario.nombre} ${otroUsuario.apellido}` 
    },
};

console.log(otroUsuario.nombreCompleto());



// Del ejemplo anterior, si nosotros queremos acceder al nombreCompleto como si fuera una propiedad
// usamos el getter
const otroUsuarioMas = {
    nombre: "Canelo",
    apellido: "Hernández",
    get nombreCompeto () {
        return `${otroUsuarioMas.nombre} ${otroUsuarioMas.apellido}` 
    },
};

console.log(otroUsuarioMas.nombreCompeto);




// Si ahora quiero asignar otro nombre completo tengo que hacer lo siquiente usando
// el getter
const otroUsuarioMas2 = {
    nombre: "Drago",
    apellido: "Hernández",
    get nombreCompeto () {
        return `${otroUsuarioMas2.nombre} ${otroUsuarioMas2.apellido}` 
    },
    set nombreCompeto(valor) {
        const [nombre, apellido] = valor.split(" ");
        this.nombre = nombre;
        this.apellido = apellido;
    }
};

otroUsuarioMas2.nombreCompeto = "Nuevo texto";
console.log(otroUsuarioMas2.nombreCompeto);