// Pasando parámetros a una función
function configurarAPI (url) {
    return `${url}`;
};

console.log(configurarAPI("https://lawebdegustavo.com"));
console.log(configurarAPI("https://lawebdedorito.com"));







// Así podemos recibir valores por parámetros por defecto (así se hacía antes)
function configurarOtraAPI (url) {
    const defaultURL = url || "https://lawebdegustavo.com";
    return `${defaultURL}`;
};

console.log(configurarOtraAPI());
console.log(configurarOtraAPI("https://lawebdedorito.com"));






// Nueva forma para tomar valores por defecto y pasarselo
function configurarOtraAPI2 (url = "https://lawebdegustavo.com") {
    return `${url}`;
};

console.log(configurarOtraAPI2());
console.log(configurarOtraAPI2("https://lawebdedorito.com"));






// Vamos a ver cómo podemos pasar un objeto completo como argumento y que la función 
// saque la propiedad que nos interese (se hace con un parameter destructuring)
const config = {
    url: "https://lawebdegustavo.com",
    bucket: "amazon S3",
    port: "80"
};

function configurarNuestraAPI ({url} = {url: "Aquí va la URL por defecto"}) {
    return `${url}`;
};

console.log(configurarNuestraAPI());
console.log(configurarNuestraAPI(config));









function configurarNuestraAPI2 (url, bucket, port ) {
    return `${url}/${bucket}:${port}`;
};

console.log(configurarNuestraAPI2("https://lawebdegustavo.com", "145", 80));