// Vamos a construir dos funciones. Estas funciones tienen que devolver el número
// de usuarios mayores de edad y el número de usuarios que son premium

            // const usuarios = [
            //     {edad: 17 , nombre: "Gustavo", plan: "premium"},
            //     {edad: 33 , nombre: "Dorito", plan: "premium"},
            //     {edad: 57 , nombre: "Canelo", plan: "free"},
            //     {edad: 14 , nombre: "Drago", plan: "gold"}
            // ];

            // function cuantosPremium () {

            // };

            // function cuantosMayores () {

            // };

            // console.log(cuantosPremium(usuarios));
            // console.log(cuantosMayores(usuarios));

const usuarios = [
    {edad: 17 , nombre: "Gustavo", plan: "premium"},
    {edad: 33 , nombre: "Dorito", plan: "premium"},
    {edad: 57 , nombre: "Canelo", plan: "free"},
    {edad: 14 , nombre: "Drago", plan: "gold"}
];

function cuantosPremium () {
    const premium = usuarios.filter( (u) => {
        return u.plan === "premium";
    } )
        return premium.length;
};

function cuantosMayores () {
    const mayores = usuarios.filter( (u) => {
        return u.edad > 18 ;
    } )
        return mayores.length;
};

console.log(cuantosPremium(usuarios));
console.log(cuantosMayores(usuarios));