const express = require('express');
var app = express();

// use: configuramos todo lo que va a requerir mi applicacion.
// express.static = Crear servidor web estatico. Esto sirve para realizar pruebas en localhost.
app.use(express.static('../../htmlAndCss/Basics de HTML'))

app.listen(3000)

console.log('Express iniciado...')