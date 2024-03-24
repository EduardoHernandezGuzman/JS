// Crear un array de longitud N y sus elementos tienen que ser números
// del 1 hasta el N

                    // let longitud = 7;

                    // function crearArray (n) {

                    // };

                    // let resultado = crearArray (longitud);

                    // console.log(resultado);


let longitud = 7;

function crearArray (n) {
    if (n <= 0) {
        return "n no puede ser menor que cero, introduce otro número";
    }
        let array = [ ];
        
        for (let i = 0 ; i < n ; i++) {
            array[i] = i +1
    };
        return array;
    };
                    
let resultado = crearArray (longitud);
                    
console.log(resultado);

