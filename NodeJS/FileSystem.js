const fs = require('fs');

//var files = fs.readdirSync('./'); // Leer directorios archivos de manera sincrona: Como es de manera sincrona, NodeJS esperara a que termine el procesamiento de esta funcion y despues seguira con el demas codigo.
fs.readdir('./', (err, files) => {
    if(err) {
        throw err;
    }
    console.log(files)
    // let archivo = fs.readFileSync('./file.txt', 'utf-8'); // Leer archivos de manera sincrona

    fs.readFile('./file.txt', 'utf-8', (err, data) => {
        if(err) {
            throw err
        }
        console.log(data)
    });
})