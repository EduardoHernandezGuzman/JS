// Alcance de las variables dentro de las funciones

function alcance () {
    function saludo () {};
    var vieja = "ya no se usa";
    let variable = "hola mundo";
    const constante = "hola mundo, otra vez";
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
};

alcance();




function masAlcance () {
    console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);
    function saludo () {};
    var vieja = "ya no se usa";
    let variable = "hola mundo";
    const constante = "hola mundo, otra vez";
};

masAlcance();




// Aquí no podemos acceder a las variables fuera de la función
function otroAlcance () {
    function saludo () {};
    var vieja = "ya no se usa";
    let variable = "hola mundo";
    const constante = "hola mundo, otra vez";
};

console.log(saludo);
    console.log(vieja);
    console.log(variable);
    console.log(constante);

otroAlcance();


// Estás 3 funciones nos van a arrojar diferentes problemas de alcance