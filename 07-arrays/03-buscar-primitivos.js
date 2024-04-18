// Vamos a buscar elementos que son tipos de datos primitivos dentro de un array

const letras = ["a", "b", "c", "d"];
console.log(letras.indexOf("d")); // Nos devuelve el índide del elemento que le pasamos


const masLetras = ["a", "b", 1, "c", "d", "e", 1, "f"];
console.log(masLetras.indexOf(1)); // Nos devuelve el índice del primer 1 que encuentra
console.log(masLetras.lastIndexOf(1)); // En este caso empieza la búsqueda desde el último elemento
console.log(masLetras.indexOf(1, 3)); // El segundo argumento (3) indica desde donde queremos 
                                      // empezar a buscar


const masLetraTodavia = ["a", "b", "c", "d", "e"];
console.log(masLetraTodavia.indexOf("z")); // Si no encuentra el elemento nos devuelve -1
console.log(masLetraTodavia.indexOf("z") !== -1); // Así podemos comprobar que el 
                                                  //elemento no se encuentra en nuestro array
                            

                                                  // La mejor forma de hacerlo es usando includes()
// Nos devuelve true o false si encuentra o no el elemento
console.log(masLetraTodavia.includes("a"));

