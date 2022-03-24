const http = require('http');

// Manejo de JSON

const ordenes = [
    { 'nombre': 'sopa', 'cantidad': 2, 'estado': 'servido', 'mesa': 5 },
    { 'nombre': 'carne', 'cantidad': 2, 'estado': 'proceso', 'mesa': 4 },
    { 'nombre': 'sopa', 'cantidad': 1, 'estado': 'pagado', 'mesa': 3 },
    { 'nombre': 'sopa', 'cantidad': 1, 'estado': 'pagado', 'mesa': 5 },
    { 'nombre': 'pasta', 'cantidad': 4, 'estado': 'proceso', 'mesa': 1 },
];

// Ruta para: OrdenesProceso y OrdenesSopa

http.createServer((req, res) => {
    if(req.url == '/'){
        res.writeHead(200, { 'text-content': 'text/json' })
        res.end(JSON.stringify(ordenes))
    } else if(req.url == '/ordenes-proceso') {

        res.writeHead(200, { 'text-content': 'text/json' })
        res.end(JSON.stringify(ordenesProceso(ordenes)))

    } else if(req.url == '/ordenes-sopa') {

        res.writeHead(200, { 'text-content': 'text/json' })
        res.end(JSON.stringify(ordenesSopa(ordenes)))

    } else {
        res.writeHead(404, { 'text-content': 'text/plain' })
        res.end('Error, Ruta no encontrada...')
    }
}).listen(3000)


//Ordenes en proceso
function ordenesProceso(ordenes) {
    return ordenes.filter((orden) => orden.estado === 'proceso')
}

function ordenesSopa(ordenes) {
    return ordenes.filter((orden) => orden.nombre === 'sopa')
}

