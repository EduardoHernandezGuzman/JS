// Puede ser muy confusa la utilización de this

const usuario = {
    nombre: "Gustavo",
    ciudadanias: ["España", "Marte", "Plutón"],
    mostrarCiudadanias () {
        console.log(this.ciudadanias);
    }
};

usuario.mostrarCiudadanias();


// Ahora queremos que nos muestre las ciudadanías linea a linea
const usuario2 = {
    nombre: "Gustavo",
    ciudadanias: ["España", "Marte", "Plutón"],
    mostrarCiudadanias () {
        this.ciudadanias.forEach(function(ciudadania) {
            console.log(ciudadania);
        });
    }
};

usuario2.mostrarCiudadanias();


// Ahora queremos agregar también el nombre del usuario a la izquierda
// Vamos a ver que esto nos devulve undefined porque this dentro de una función
// hace referencia al objeto de window, así que tenemos que hacerlo de otra manera
const usuario3 = {
    nombre: "Gustavo",
    ciudadanias: ["España", "Marte", "Plutón"],
    mostrarCiudadanias () {
        this.ciudadanias.forEach(function(ciudadania) {
            console.log(this.nombre, ciudadania);
        });
    }
};

usuario3.mostrarCiudadanias();


// Para solucionar el problema de antes tenemos que hacer esto (usar una fat arrow function)
// Porque las fat arrow function no tienen un contexto de this
const usuario4 = {
    nombre: "Gustavo",
    ciudadanias: ["España", "Marte", "Plutón"],
    mostrarCiudadanias () {
        this.ciudadanias.forEach(ciudadania => {
            console.log(this.nombre, ciudadania);
        });
    }
};

usuario4.mostrarCiudadanias();