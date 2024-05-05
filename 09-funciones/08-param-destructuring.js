// Vamos a suponer que tenemos una función para configurar un servidor web
// y este recibe nuestro objeto de configuración

function webServer (config) {
    const { url } = config;
    return url;
};

console.log(webServer({ url: "http://google.com" }));



// Lo mismo de antes podemos expresarlo así
function webServer2 ({ url }) {
    return url;
};

console.log(webServer2({ url: "http://google.com" }));



// También podemos hacer un destructuring de propiedades que contengan objetos
const config = {
    url: "http://google.com",
    direccion: {
        calle: "Calle inventada",
        numero: 80,
    }
};

function webServer3 ({ url }) {
    return url;
};

console.log(webServer3(config));



// Vamos a ver lo anterior con un array
const otraConfig = [
    "http://google.com",
    145,
    80,
];

function webServer4 (url, bucket, port) {
    return url;
};

console.log(webServer4(otraConfig));