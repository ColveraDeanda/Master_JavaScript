const express = require('express');
const bodyParser = require('body-parser')
var app = express();

/**
 * Body-parser: es un middleware que sirve para:
 * - Parsear ya sea la url de una request y poder manipularla, extrayendo su data con req.query.
 * - Tambien sirve para manipular la data cuando se usa POST.
 */


var urlencodedParser = bodyParser.urlencoded({ extended: false })

// http://localhost:3000/?nombre=Cristobal&Apellido=Olvera
app.get('/', urlencodedParser, (req, res) => {
    console.log(req.query)
    res.send(`Tu nombre es: ${req.query.nombre} \n Tu Apellido es: ${req.query.Apellido}`)
})

app.listen(3000, () => {
    console.log('Servidor iniciado...')
})