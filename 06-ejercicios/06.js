// Vamos a crear una función que nos cree una copia del objeto que le pasemos.
// Debemos hacerlo sin usar Object.assign() ni spread operator

                // let obj1 = { id: 1, name: "Gustavo"};

                // function crearCopia(obj) {

                // };

                // let obj2 = crearCopia(obj1);
                // console.log({obj1, obj2});




let obj1 = { id: 1, name: "Gustavo"};

function crearCopia(obj) {

    let copia = {};

    for (let llave in obj) {
        copia[llave] = obj [llave];
    }

    return copia;

};

let obj2 = crearCopia(obj1);
console.log({obj1, obj2});
