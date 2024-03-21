// Construir una funcción que nos permita poder obtener un elemento 
// por su índice (le vamos a pasar el array y el índice). 
// El valor que le pasemos como índice no puede ser menor que cero y 
// el elemento debe existir en el array

// indice validar que no sea menor a cero y que el elemento
// exista en el array

//       function getByIdx (arr, idx) {

//      }

//      let resultado = getByIdx ([1, 2], 1 );
//      console.log(resultado);


function getByIdx (arr, idx) {
    if (idx < 0) {
        return "el índice no existe";
    }
    else if (arr.length <= idx) {
        return "el elemento no existe";
    }
    else {
        return arr[idx];
    }
}
 
let resultado = getByIdx ([1, 2], 1 );
console.log(resultado);


