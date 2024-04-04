// JS es un lenguaje dinámico, por eso podemos ir agregando o quitando propiedades
// a un objeto. Puede presentar un problema si estamos intentando acceder a una propiedad
// que ha sido eliminada. Vamos a ver cómo listar las propiedades de un objeto.

const punto = {
    x: 15,
    y: 20,
    dibujar: function () {console.log("Dibujando...")},
};

for (let llave in punto) {
    console.log(llave, punto[llave]);
};

//Se utiliza un bucle for...in para iterar sobre todas las propiedades enumerables de un objeto.