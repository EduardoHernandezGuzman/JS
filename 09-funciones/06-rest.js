// Esta es la función que vimos antes
function suma (a, b) {
    console.log(arguments);
};

suma(1, 2, 3, 4);

// Vamos a ver una mejor manera de acceder a los argumentos de
// una función
function suma2 (a, b, ...rest) {
    console.log(rest);
};

suma2(1, 2, 3, 4);

// Funciona esto con las fat arrow funtions
const suma3 = (a, b, ...rest) => {  // Sí, sí funciona!!!
    console.log(rest);
};

suma3(1, 2, 3, 4, 5, 6);

// ¿Para qué nos podría servir esto?
// Por ejemplo si queremos imprimir mensajes de error
// y queremos saber de donde vienen 
const logMsg = (descripcion, ...msgs) => {
    for (let msg of msgs) {
        console.log(descripcion, msg);
    }
};

logMsg("Servidor:", "Error 1", "Petición aceptada", "Socket activo");

let mensajes = ["Error 1", "Petición aceptada", "Socket activo"];
logMsg("Cliente móvil:", ...mensajes);