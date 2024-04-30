// Tenemos estos dos arrays. Tenemos que hacer lo siguiente:
// Fusionar las estructuras de usuarios y user.
// Fusionar los arrays.
// Ordenar por edad.
// Crear plantilla HTML: <li>Nombre: name, Edad: age</li>
// Imprimir la lista en consola.

            // const usuarios = [
            //     {edad: 17 , nombre: "Gustavo", plan: "premium"},
            //     {edad: 33 , nombre: "Dorito", plan: "premium"},
            //     {edad: 57 , nombre: "Canelo", plan: "free"}
            // ];

            // const users = [
            //     {age: 34 , name: "Drago", membership: "gold"},
            //     {age: 56 , name: "Rex", membership: "premium"},
            //     {age: 11 , name: "Dino", membership: "free"}
            // ];

const usuarios = [
    {edad: 17 , nombre: "Gustavo", plan: "premium"},
    {edad: 33 , nombre: "Dorito", plan: "premium"},
    {edad: 57 , nombre: "Canelo", plan: "free"}
];

const users = [
    {age: 34 , name: "Drago", membership: "gold"},
    {age: 56 , name: "Rex", membership: "premium"},
    {age: 11 , name: "Dino", membership: "free"}
];


// Pasando user a español
const enEspanol = users.map( (i) => ({
    edad: i.age,
    nombre: i.name,
    plan: i.membership 
}))



// Fusionando los dos arrays en uno solo
const usuariosJuntos = [...usuarios, ...enEspanol];



// Ordenar por edad
const menorAMayor = usuariosJuntos.sort( (a, b) => {
    if (a.edad < b.edad) {
        return -1;
    }
    if (a.edad > b.edad) {
        return 1;
    }
    return 0;
})




// Crear plantilla HTML
const HTML = menorAMayor.map( (i) => {
    return `<li>Nombre: ${i.nombre}, Edad: ${i.edad}</li>`
} )




// Último paso
const imprimirConsola = `<ul>${HTML.join(" ")}</ul>` ;
console.log(imprimirConsola);