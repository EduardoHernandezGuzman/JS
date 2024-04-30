// Vamos a crear una función que recibe un array
// y tiene que devolver el objeto tenga la mayor edad

            // const usuarios = [
            //     {edad: 17 , nombre: "Gustavo", plan: "premium"},
            //     {edad: 33 , nombre: "Dorito", plan: "premium"},
            //     {edad: 57 , nombre: "Canelo", plan: "free"},
            //     {edad: 14 , nombre: "Drago", plan: "gold"}
            // ];

            // function obtenerMayor () {

            // }

            // const mayor = obtenerMayor(usuarios);
            // console.log(mayor);


const usuarios = [
    {edad: 17 , nombre: "Gustavo", plan: "premium"},
    {edad: 33 , nombre: "Dorito", plan: "premium"},
    {edad: 57 , nombre: "Canelo", plan: "free"},
    {edad: 14 , nombre: "Drago", plan: "gold"}
];


// Utilizando un FOR
function obtenerMayor (arr) {
    let mayor = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i].edad > mayor.edad) {
            mayor = arr[i]
        }
    }
    return mayor;
}

const mayor = obtenerMayor(usuarios);
console.log(mayor);


//Utilizando un FOR OF
function obtenerMayor2(arr) {
    let mayor2 = arr[0];

    for (const usuario of arr) {
        if (usuario.edad > mayor2.edad) {
            mayor2 = usuario;
        }
    }

    return mayor2;
}

const mayor2 = obtenerMayor2(usuarios);
console.log(mayor2);


//Utilizando el método reduce()
function obtenerMayor3() {
    return usuarios.reduce((mayor3, usuario) => {
        return usuario.edad > mayor3.edad ? usuario : mayor3;
    }, usuarios[0]);
}

const mayor3 = obtenerMayor3();
console.log(mayor3);