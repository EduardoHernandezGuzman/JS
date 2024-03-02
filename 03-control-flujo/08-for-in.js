//Usamos FOR IN para iterar las propiedades de un objeto

    //      for (variable in objeto) {
    //          Código que se ejecuta en cada iteración
    //      }

let user = {
    id: 1,
    name: "Gustavo",
    age: 2,
};

//Aquí listamos el nombre de la propiedad
console.log("NOMBRE DE LA PROPIEDAD")
for (let prop in user) {
    console.log(prop);
};

//Aquí listamos el valor de la propiedad
console.log("VALOR DE LA PROPIEDAD")
for (let prop in user) {
    console.log(user[prop]);
};

//Aquí listamos el nombre y elvalor de la propiedad
console.log("NOMBRE Y VALOR DE LA PROPIEDAD")
for (let prop in user) {
    console.log(prop, user[prop]);
};