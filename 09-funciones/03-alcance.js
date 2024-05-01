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