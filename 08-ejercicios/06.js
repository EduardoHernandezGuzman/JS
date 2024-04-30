// Construir una función que se llame dividePorTipo.
// Debes usar reduce()
// La función recibe un array y nos tiene que devolver 
// un objeto cuyas propuedades están divididas por tipo
// de dato.

            // function dividePorTipo (arr) {

            // };

            // const miArray = ["Hola", 12, true, "Mundo", {}, {id:15}, ["lala"]];

            // let arr = dividePorTipo(miArray);
            // console.log(arr);



function dividePorTipo (arr) {
    return arr.reduce( (acumulador, elelemtoQueItera) => {
        let llave = typeof elelemtoQueItera;
        acumulador[llave] = acumulador[llave] ? acumulador[llave] : [];
        acumulador[llave].push(elelemtoQueItera);
        return acumulador;
    } , [] )
        
        
};

const miArray = ["Hola", 12, true, "Mundo", {}, {id:15}, ["lala"]];

let arr = dividePorTipo(miArray);
console.log(arr);