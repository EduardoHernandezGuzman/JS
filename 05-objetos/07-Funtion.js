// Estamos definiendo una función constructora
function Punto (x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function () { console.log("Dibujando..."); }
};


// Esta función de call nos permite llamar funciones a las que podemos pasar el 
// contexto de this y así poder aumentar los objetos que le estamos pasando.

let punto = { z:7 };
Punto.call (punto, 1, 2);

console.log(punto)



// .aplply hace lo mismo que .call  con la diferencia de que todos los argumentos
// que le pasemos tenemos que hacerlo con una forma de array
// Punto.apply (punto, [1, 2]);
