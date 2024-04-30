// Debemos obtener los usuarios de pago del array.
// Luego debemos ordenarlos de mayor a menor de edad.
// Luego debemos devolver el nombre del usuario
// Después debemos crear una plantilla HTML
// Debemos impirmir en consola esa plantilla HTML 
// <ul> <li></li> </ul>

            // const usuarios = [
            //     {edad: 17 , nombre: "Gustavo", plan: "premium"},
            //     {edad: 33 , nombre: "Dorito", plan: "premium"},
            //     {edad: 57 , nombre: "Canelo", plan: "free"},
            //     {edad: 14 , nombre: "Drago", plan: "gold"}
            // ];

const usuarios = [
    {edad: 17 , nombre: "Gustavo", plan: "premium"},
    {edad: 33 , nombre: "Dorito", plan: "premium"},
    {edad: 57 , nombre: "Canelo", plan: "free"},
    {edad: 14 , nombre: "Drago", plan: "gold"}
];


// Obteniendo los usuarios de pago
function usuariosPago () {
    return usuarios.filter ( (i) => {
        return i.plan === "premium" || i.plan === "gold"
    })
};

const usuariosDePago = usuariosPago();


// Ordenando usuarios de mayor a menor
function deMayorAMenor () {
    usuariosDePago.sort( (a, b) => {
        if (a.edad < b.edad) {
            return 1;
        }
        if (a.edad > b.edad) {
            return -1;
        }
        return 0;
    })
    return usuariosDePago;
};

const mayorMenor = deMayorAMenor();


// Devolviendo el nombre del usuario
function nombresUsuarios () {
    return mayorMenor.map( (i) => {
        return i.nombre
    } )
};

const nombres = nombresUsuarios();


// Devolver HTML
function conversionHTML () {
    return nombres.map ( (i) => {
        return `<li>${i}</li>` 
    } )
};

const HTML = conversionHTML();


// HTML plano
const HTMLimprimir = HTML.join(" ");
const final = `<ul>${HTMLimprimir}</ul>`

console.log(final);