// Vamos a crear un objeto de fecha
// Nos lo crea con la hora de nuestro ordenador
const ahora = new Date();
console.log(ahora);


// Vamos a crear una fecha en específico
// Recordar que se usa el formato Mes Día Año
const fecha = new Date("July 21 1983  13:22");
console.log(fecha);


// También podemos pasar los datos como argumentos
const fecha2 = new Date(1985, 6, 21, 15, 31);
console.log(fecha2); 


// Vamos a obtener las fechas en formato internacional
console.log(
    "DateString",
    fecha2.toDateString(),      // Para ver la fecha en formato corto y amigable
    "ISOString",
    fecha2.toISOString(),       // Adecuado para pasar fecha del servidor al cliente (o viseversa)
    "TimeString",
    fecha2.toTimeString(),      // Para ver horas
);


// Tenemos los métodos get para obtener un montón de cosas (ejemplos)
console.log(
    fecha2.getDate(),
    fecha2.getDay(),
    fecha2.getFullYear(),
    fecha2.getHours(),
);


// Con los métodos set podemos cambiar el año, el día, etc
// Cambiamos el año de fecha2 a 2035
fecha2.setFullYear(2035);
console.log(fecha2)


