// Ejercicio inverso al 08.js
// Partiendo de un array de pares y tenemos que obtener un array donde cada
// cada uno de los elementos sea un objeto (array de objetos).
//También debemos añadir una propiedad de id en base al número.

// Debemos conseguir esto: 

                    // let array = [ {
                    //     id: 1,
                    //     name: "Nicolás",
                    // }, {
                    //     id: 2,
                    //     name: "Felipe",
                    // },{
                    //     id: 3,
                    //     name: "Manolo",
                    // } ];


let pairs = [
        [1, {name: "Nicolás"}],
        [2, {name: "Felipe"}],
        [3, {name: "Manolo"}],
    ];

    let array = [];

    for (let i = 0; i < pairs.length; i++) {
        array.push({ id: pairs[i][0], name: pairs[i][1].name });
    }

console.log(array);
