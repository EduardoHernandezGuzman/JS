// Los métodos every() y some() son métodos de los arrays en JavaScript que se 
// utilizan para verificar si los elementos de un array cumplen cierta condición.
// every() verifica si todos los elementos de un array cumplen una condición determinada. 
// some() verifica si al menos un elemento de un array cumple una condición determinada.


// every() se ejecuta hasta que encuentre un valor de falso
let usuarios = [
    {id: 1, activo:true},
    {id: 2, activo:false},
    {id: 3, activo:false},
];

let todosActivos = usuarios.every(u => {
    console.log("Todos activos", u.id);
    return u.activo;
});

console.log(todosActivos);


// Método some() se ejecuta hasta que encuentre al menos un valor true
let algunoActivo = usuarios.some(u => {
    console.log(u.id);
    return u.activo;
});

console.log(algunoActivo); 