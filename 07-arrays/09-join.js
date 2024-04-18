// join() se utiliza para unir todos los elementos de un array en una cadena de texto.
let usuarios = ["Gustavo", "Dorito", "Canelo"];

let mensaje = usuarios.join (", "); // Aquí se añade el separador. 
                                    // En este caso un espacio y coma

console.log(mensaje);


// Usamos el método split() para dividir una cadena de texto en un array de substrings
let saludo = "Hola te mando un saludo desde la ciudad de Madrid";

let dividido = saludo.split(" "); // Le estamos diciendo que nos lo separe por
                                  // el espacio en blanco.

console.log(dividido);




// Ahora vamos a decirle que nos junte ese último ejemplo separándolos por un guión

let otroSaludo = dividido.join("-");

console.log(otroSaludo);