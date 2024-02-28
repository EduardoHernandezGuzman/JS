//SHORT-CIRCUIT

//evaluan en FALSO (llamados falsy)
    //false
    //0
    //""
    //null
    //undefined
    //NaN
//FALSY = valores que se evalúan como false en un contexto booleano. 

let nombre = ""; //nombre envalua en falso
let username =  nombre || "usuario sin registrar";
console.log(username);

let nombre2 = "Pedro"; //nombre envalua en true
let username2 =  nombre2 || "usuario sin registrar";
console.log(username2);



//


function fn1() {
    console.log("Soy función 1")
    return true;
};

function fn2() {
    console.log("Soy función 2")
    return true;
};
//como las dos funciones devuelven true, ejecuta las dos
let x = fn1() && fn2();


//


function fn3() {
    console.log("Soy función 3")
    return false;
};

function fn4() {
    console.log("Soy función 4")
    return true;
};
//Cuando se utiliza el operador &&, si el primer operando 
//(en este caso, el resultado de fn3()) es falsy, el 
//resultado de toda la expresión será falsy, y no 
//se evaluará el segundo operando. Si el primer operando es 
//truthy, se evaluará el segundo operando y el resultado 
//será el valor de ese segundo operando.
let y = fn3() && fn4();