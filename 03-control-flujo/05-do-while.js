//En lugar de evaluar la condición al comienzo como en while, 
//lo hace al final (ejecuta el código y luego evalúa la condición)

//En el while primero se mira si se cumple la condición, y si se
//cumple, se ejecuta el código

    //      do {
    //          Bloque de código a ejecutar
    //      } while (condición);


let i = 0;

do {
    if (i % 2 == 0){ // el resto de dividir por 2 es 0
        // => es un número par
console.log("Número par" , i);
}
i++;
} while (i < 10);






