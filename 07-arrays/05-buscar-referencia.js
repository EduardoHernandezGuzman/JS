// Vamos a ver cómo buscar elementos que son de tipo referencia
// dentro de nuestros arrays.

const usuarios = [
    {
        id: 1,
        name: "Gustavo"
    },
    {
        id: 2,
        name: "Dorito"
    },
];

// Para este tipo de elementos utilizamos en método find() de este modo
const resultadoBusqueda = usuarios.find(function(user) {
    return user.id === 1;
});
console.log(resultadoBusqueda);


// Utilizando una arrow funtion quedaría así.
const otraBusqueda = usuarios.find(user2 => 
    user2.id === 2);
console.log(otraBusqueda);


// Con findIndex() podemos buscar el índice del elemento
const otraBusquedaMas = usuarios.findIndex(user3 => 
    user3.name === "Dorito");
console.log(otraBusquedaMas);