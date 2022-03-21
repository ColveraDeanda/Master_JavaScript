const http = require('http');

/**
 * The "header" tells the server details about the request such as what type of data the 
 * client, user, or request wants in the response. Type can be html , text , JSON , cookies or others.
 */

// JSON.stringify() = Para convertir un objeto js a un objeto JSON:
const obj = {name: "John", age: 30, city: "New York"};
const myJSON = JSON.stringify(obj);

// Cuando se envia info a un servidor web, el formato tiene que ser un string (JSON).

const options = {
  hostname: 'www.google.com',
  port: 80,
  path: '/upload',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json' // Al parecer con esto, le estamos diciendo que cualquier tipo de response, debe ser un string.
  }
};