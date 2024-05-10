// Todo esto es una forma antigua de hacerlo. Ya no se hace así.

// Vamos a ver cómo cambiar el contexto de this o pasar otro objeto para que tome el 
// contexto de this dentro de otra función.


// Esta función nos devuelve el contexto de window
function saludar () {
    console.log(this);
};

saludar();


// Vamos a ver cómo cambiar lo anterior (cambiar el contexto de this)
function saludar2 (...rest) {
    console.log(this, rest);
};

saludar2.call({propiedad:"Hola mundo"}, 1, 5);


// Otra forma de cambiar el contexto de this
// Con apply los argumentos hay que pasarlos como array
function saludar3 (...rest) {
    console.log(this, rest);
};

saludar3.apply({propiedad:"Hola mundo"}, [1, 5]);


// Otra forma de cambiar el contexto de this
function saludar4 (...rest) {
    console.log(this, rest);
};

let nuevosaludar = saludar4.bind({propiedad:"Hola mundo"});
nuevosaludar(1, 5);