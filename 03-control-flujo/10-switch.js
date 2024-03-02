//Es una alternativa a IF-ELSE

//      switch (expresion) {
//          case valor1:
//              Bloque de código a ejecutar si la expresion es igual a valor1
//             break;
//          case valor2:
//              Bloque de código a ejecutar si la expresion es igual a valor2
//             break;
//          Más casos...
//          default:
//              Bloque de código a ejecutar si ninguno de los casos anteriores se cumple
//   }

let accion = "listar";  //Me devuelve acción de listar. Si la variable es guardar, 
                        //me devuelve acción de guardar. Si la variable es dormir, 
                        //me devuelve Acción no registrada

switch (accion) {
    case "listar":
        console.log("Acción de listar");
        break;
    case "guardar":
        console.log("Acción de guardar");
        break;
    default:
        console.log("Acción no registrada");
};