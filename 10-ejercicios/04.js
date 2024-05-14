// Vamos a implimentar una función llamada suma.
// Suma recibe como primer parámetro una función y el resto de parámetros
// lo vamos a agrupar dentro del parámetro rest.
// Llamamos a la función de suma y el primer argumento que se le pasa es
// una función y a esa funcíón se le entrega el resultado final de la 
// suma de todos los otros parámetros.

            // function suma (fn, ...rest) {

            // };

            // suma(resultado => {
            //     console.log(resultado);
            // }, 1, 2, 3, 4);


function suma (fn, ...rest) {
    let resultado = rest.reduce( (acc, el) => acc + el);
    fn(resultado);
};

suma(resultado => {
    console.log(resultado);
}, 1, 2, 3, 4);