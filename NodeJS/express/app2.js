const express = require('express');
var app = express();
const port = 3000


// get = cuando se este solicitando una url
app.get('/', (req, res) => {
    res.send('Hola desde un get..')
})

app.get('/home', (req, res) => {
    res.send(`Hola desde home`)
})

app.listen(port, () => {
    console.log(`Servidor iniciado en el puerto: ${port}`)
})