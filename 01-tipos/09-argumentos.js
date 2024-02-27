//Tenemos esta función que nos retorna un valor de 4
function suma() {
    return 2 + 2;
};
console.log(suma());


//Vamos a usar los argumentos y parámetros para darle
//flexibilidad a la función anterior
function suma2(a) { //esa a es un parámetro
    return a + 2;
};
console.log(suma2(5)); //ese 5 es un argumento



function suma3(a, b) { 
    return a + b;
};
console.log(suma3(5, 6)); 
