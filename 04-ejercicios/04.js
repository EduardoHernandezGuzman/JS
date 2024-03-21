// Escribe un algoritmo que imprima los número impares
// del 0 al 10. (1, 3, 5 y 7)


// Utilizando un FOR
let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i= 0 ; i < numeros.length ; i++) {
   
    if (numeros [ i ]  % 2 !== 0) {
        console.log("for" , numeros [ i ] )
    };
};



// Utilizando un WHILE
let z = 0;

while (z <= 10) {
   if (z % 2 !==0) {
        console.log("while" , z)
   }
    z++;
};
