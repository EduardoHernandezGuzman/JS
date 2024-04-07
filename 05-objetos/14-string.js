const saludo = "Hola Mundo";

console.log(
    saludo.length,  // Longitud del string
    saludo.indexOf("Mu"),    // Devuelve el índice donde se encuentra Mu
    saludo.indexOf("xz"),   // Cuando no lo encuentra nos devuelve -1
    saludo.includes("Mundo"),    // Nos verifica con true o false si lo incluye
    saludo.replace("Mundo", "Clase"),   // Nos reemplaza el primer argumento por el segundo
    saludo.toLowerCase(),   // Pasa todo el string a minúsculas
    saludo.toLocaleUpperCase(), // Pasa todo el string a mayúsculas
    saludo.substring(0, 7), // Inicia desde el indice 0 y acaba en el índice 7
);

const espacios = ".     Hola      Mundo     ";
console.log(
    espacios.trim() // Nos va a quitar los espacios a la izquierda y a la derecha
);