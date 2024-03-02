//Nos vamos a encontrar momentos donde vamos a necesitar
//parar la ejecución de algún LOOP 

//BREAK nos permite salir de un LOOP
//CONTINUE nos permite salirnos de una iteración

let i = 0;

while(i < 6) {
    i++;
    if (i == 2) {   //Aquí le decimos que si i = 2
        continue;   //se salte el console.log (pasa a la siguiente iteración)
    }
    if (i == 4) {   //Aquí le decimos que si i = 4
        break;      //termine el loop
    }
    console.log(i);
};

// => el resultado es que nos va a imprimir 1 y 3