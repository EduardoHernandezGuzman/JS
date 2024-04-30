// Vamos a construir una función llamada groupBy
// La función recibe un array y la propiedad con la que 
// queremos agrupar las propiedades del array.


            // const usuarios = [
            //     {edad: 17 , nombre: "Gustavo", plan: "premium"},
            //     {edad: 33 , nombre: "Dorito", plan: "premium"},
            //     {edad: 57 , nombre: "Canelo", plan: "free"},
            //     {edad: 14 , nombre: "Drago", plan: "gold"}
            // ];

            // function groupBy () {

            // };

            // const grouped = groupBy(usuarios, "plan");
            // console.log({grouped});


const usuarios = [
    {edad: 17 , nombre: "Gustavo", plan: "premium"},
    {edad: 33 , nombre: "Dorito", plan: "premium"},
    {edad: 57 , nombre: "Canelo", plan: "free"},
    {edad: 14 , nombre: "Drago", plan: "gold"}
];

function groupBy (arr, prop) {
    return arr.reduce( (acumulador, elelemtoQueItera) => {
        let valor = elelemtoQueItera[prop];
        acumulador[valor] = acumulador[valor] ? acumulador[valor] : [];
        acumulador[valor].push(elelemtoQueItera);
        return acumulador;
    } , {})
};

const grouped = groupBy(usuarios, "plan");
console.log({grouped});