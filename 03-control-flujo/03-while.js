//Cuando queremos ejecutar una porción de código más de una vez
//recurrimos a los LOOPS/BUCLES (tenemos 5)
//  while , do while , for , for in , for of

// while (condición) {
//     código
// };


let i = 0;

while (i < 4) {
    console.log(i);
    i++; //añadimos i++ para que aumente el valor en 1 en cada
         //pasada y pueda salir del loop
};

console.log("Fuera del while");



//Cuales son los números pares
let i2 = 0;

while (i2 < 10) {
    if (i2 % 2 == 0){ // el resto de dividir por 2 es 0
                      // => es un número par
        console.log("Número par" , i2);
    }
    
    i2++; 
         
};

console.log("Fuera del while");