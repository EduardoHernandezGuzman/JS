// this hace referencia a un objeto (el cual estamos utilizando).
// Pero si this no se ecuentra dentro de un objeto sino en una función
// entonces this hace referencia al objeto windows y en el caso de node
// hace referencia al objeto global.
// Pero si utilizamos new, hace referencia al que será creado.

// this hace referencia al objeto
const user = {
    name: "Gustavo", 
    login () {
        console.log(this);
    }
};

user.login();


// Cuando this se encuentra dentro de una función
// Aquí hace referencia al objeto de window
function log() {
    console.log(this);
};

log();
// Aquí hace referencia al objeto que nos va a devolver la función
function Log(mensaje) {
    this.mensaje = mensaje;
    console.log(this);
};

const l = new Log("Hola mundo");