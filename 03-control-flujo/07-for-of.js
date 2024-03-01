// Usamos FOR OF para iterar por un array de forma sencilla

    //      for (variable of iterable) {
    //          Bloque de código a ejecutar
    //      }

let animales = ["conejo", "gato", "perro", "rata", "halcón"];

for (animal of animales) {
    console.log(animal);
};


//La forma de hacerlo con el WHILE
let i = 0;
while (i < animales.length) {
    console.log(animales[i]);
    i++
};