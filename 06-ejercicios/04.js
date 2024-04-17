// Vamos a construir una función que nos permita determinar que 
// propiedades de un objeto son métodos (funciones asignadas a una 
// propiedad de un objeto)

                // let objeto = {
                //     id: 1,
                //     name : "Gustavo",
                //     login: function() {},
                //     logout: function() {},
                // };

                // function cualesMetodos (obj) {

                // };

                // cualesMetodos(objeto);


let objeto = {
    id: 1,
    name : "Gustavo",
    login: function() {},
    logout: function() {},
};

function cualesMetodos (obj) {

    for (let llave in obj) {
        if (typeof (obj[llave]) == "function") {
            console.log(llave , "es un método del objeto");
        }
    }
};

cualesMetodos(objeto);
