            // function cualEsMayor(a, b) {

            // }

            // let mayor = cualEsMayor(10, 5);

            // console.log(mayor);

            // El resultado en consola tiene que ser 10

            

//Solución usando IF ELSE
function cualEsMayor(a, b) {

    if(a > b) {
        return a;
    }
    else {
        return b;
    }

}

let mayor = cualEsMayor(10, 5);

console.log(mayor);




//Solución usando un operador ternario
function cualEsMayor2(c, d) {

    return(c > d) ? c : d;
    
}

let mayor2 = cualEsMayor2(10, 5);

console.log(mayor2);
