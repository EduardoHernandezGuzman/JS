// Tenemos un array de usuarios.
// Vamos a construir una función que nos devuelva 
// los usuarios que NO son free.

            // const usuarios = [
            //     {edad: 17 , nombre: "Gustavo", plan: "premium"},
            //     {edad: 33 , nombre: "Dorito", plan: "free"},
            //     {edad: 57 , nombre: "Canelo", plan: "free"},
            //     {edad: 14 , nombre: "Drago", plan: "gold"}
            // ];

            // function getPaidUsers(usrs) {

            // };

            // console.log(getPaidUsers(usuarios));


const usuarios = [
    {edad: 17 , nombre: "Gustavo", plan: "premium"},
    {edad: 33 , nombre: "Dorito", plan: "free"},
    {edad: 57 , nombre: "Canelo", plan: "free"},
    {edad: 14 , nombre: "Drago", plan: "gold"}
];

function getPaidUsers(usrs) {
    return usrs.filter( (u) => {
        return u.plan !== "free"
    } )

};

console.log(getPaidUsers(usuarios));