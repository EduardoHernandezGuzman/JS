// Vamos a tomar un objeto que contiene la propiedad de name,
// y le agregaremos la propiedad de id (que se generará de forma
// aleatoria).

                // let objeto = {name: "Gustavo"};

                // function agregarId(obj) {

                // };

                // agregarId(objeto);
                // console.log(objeto);

let objeto = {name: "Gustavo"};

function agregarId(obj) {
    obj.id = Math.floor( Math.random() *100);
};

agregarId(objeto);
console.log(objeto);





// Mismo ejercicio donde he añadido una comprobación para
// ver si estamos ante un objeto o no

let objeto2 = {name: "Dorito"};

function agregarId2(obj) {
    if (typeof obj === "object") {
        obj.id = Math.floor( Math.random() *100);
    } else { return console.log(objeto2, "no es un objeto")};
};

agregarId2(objeto2);
console.log(objeto2);