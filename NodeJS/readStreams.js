const fs = require('fs')

/** Los streams se usan cuando se esta manipulando una gran cantidad de informacion y se tiene que
 *  leer/escribir archivos muy pesados. => un stream estara leyendo/escribiendo por pedacitos un docuento
 *  conforme vaya siguiendo el flujo de informacion.
 */

let stream = fs.createReadStream('./file.txt', 'utf-8');
// Data almacenara el pedacito y lo mostrara conforme vaya fluyendo el stream.
let data = '';

// Cuando se detecte el evento 'data', se ejecutara la sig. funcion solo 1 vez. 
// Esto sirve para saber en que momento se esta inicializando el stream.
stream.once('data', () => {
    console.log('Iniciando stream...')
    console.log(data.length)
})

// Cuando el stream detecte que hay datos fluyendo, se trigueara el evento 'data'. Y los "pedacitos" se guardaran en data.
stream.on('data', (chunk) => {
    data += chunk;
})

stream.on('end', () => {
    console.log('Stream terminado...')
    console.log(data.length)
})


//////  Tambien se puede modificar un file haciendo uso de un stream, esto se hace con fs.createWriteStream().
/**
 * Es mas facil editando con streams que de la menera tradicional, por que se tienen que usar 2 metodos tradicionalmente:
 *  - fs.writeFile
 *  - fs.appendFile
 * Y con stream solo se hace uso de un solo metodo para editar en todo momento. Y se debe usar stream.close()
 * cuando se termina la edicion del documento haciendo uso de stream.
 */