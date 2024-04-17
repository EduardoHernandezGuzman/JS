// Ejercicio parecido al anterior.
// Vamos a crear una función que evalue si el objeto tiene una 
// propiedad en particular (si la tiene debe devulver true). 

                // let objeto = {
                //     id: 1,
                //     name : "Gustavo",
                //     login: function() {},
                //     logout: function() {},
                // };

                // let propiedad = "name";

                // function tieneProp(obj, propiedad) {

                // };

                // console.log(tieneProp(objeto, propiedad));


let objeto = {
    id: 1,
    name : "Gustavo",
    login: function() {},
    logout: function() {},
};

let propiedad = "name";


function tieneProp(obj, propiedad) {

   for (let llave in obj) {
        if (llave === propiedad) {
            return true;
        } 
    }
    return false;
};


console.log(tieneProp(objeto, propiedad));

if (tieneProp(objeto, propiedad) == true) {
    console.log("El objeto tiene esa propidad")
} else {
    console.log("El objeto no tiene esa propiedad")
};