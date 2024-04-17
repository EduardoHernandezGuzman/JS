// Vamos a construir una función que nos diga si dos objetos son similares, 
// si tienen las misma propiedades y valores. La función nos devolverá true o false.


                // function similares (obj1, obj2) {

                // };

                // let resultado = similares (
                //     {id:1, name:"Gustavo"},
                //     {id:1, name: "Dorito"},
                // );

                // console.log(resultado);

                
function similares (obj1, obj2) {

    let comprobacion = false;

    for (let llave in obj1) {
       if (obj1[llave] !== obj2[llave]) {
        comprobacion = true;
       }
    }
    return !comprobacion;
};

let resultado = similares (
    {id:1, name:"Gustavo"},
    {id:1, name: "Dorito"},
);

console.log(resultado);

if (resultado == true) {
    console.log("Los objetos son iguales")
} else {
    console.log("Los objetos son distintos")
};