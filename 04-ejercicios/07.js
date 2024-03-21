// Crear un algoritmo que nos devuelva el valor del producto
// habiéndole sumado el impuesto correspondiente
// Aclaración: a 19.90 € hay que sumarle un 15% extra

                // function precioCompleto (precio, impuesto) {

                // };

                // let resultado = precioCompleto (19.90, 0.15);
                // console.log(resultado);


function precioCompleto (precio, impuesto) {
    return (precio + (precio * impuesto));
};

let resultado = precioCompleto (19.90, 0.15);
console.log(resultado);