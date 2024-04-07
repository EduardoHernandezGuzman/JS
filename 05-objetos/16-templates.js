// Los templates strings nos permite hacer lo que hacíamos con los caracteres de escape
// de forma diferente
const saludo = `Hola, este
es un 
saludo que utiliza los
"template strings"`;

console.log(saludo);

// También nos permiten los templates strings recibir variables
const nombre = "Gustavo";
const apellido = "Hernández"
const otroSaludo = `Hola ${nombre} ${apellido}, ¿qué tal te encuentras hoy?`;

console.log(otroSaludo);

// Podemos usarlo como una función
function plantilla (nombre, ) {
    return `Bienvenido ${nombre} a este documento .js`
 };

 console.log(plantilla("Dorito"));

