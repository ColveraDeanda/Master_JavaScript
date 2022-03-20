const fs = require('fs');

//var files = fs.readdirSync('./'); // Leer directorios archivos de manera sincrona: Como es de manera sincrona, NodeJS esperara a que termine el procesamiento de esta funcion y despues seguira con el demas codigo.
fs.readdir('./', (err, files) => {
    if (err) {
        throw err;
    }
    console.log(files)
    // let archivo = fs.readFileSync('./file.txt', 'utf-8'); // Leer archivos de manera sincrona

    fs.readFile('./file.txt', 'utf-8', (err, data) => {
        if (err) {
            throw err
        }
        // console.log(data)
    });
})

const file = './testFile.txt';
// Validando si archivo existe de manera sincrona. (Opcion 1)
// if(fs.existsSync(file)) {
//     console.log('Existe');
// } else {
//     console.log('No existe');
// }

// Check if the file exists in the current directory.(Opcion 2)
fs.access(file, fs.constants.F_OK, (err) => {
    if (err) {
        // Para escribir (editar) un archivo seria: (Si el archivo no existe, se crea uno.)
        let content = 'Este es mi contenido desde NodeJS.'
        fs.writeFile('./testFile.txt', content, (err) => {
            if (err) throw ('ERROR');
            fs.readFile('./testFile.txt', 'utf-8', (err, data) => {
                console.log(data);
            })
        });
    } else {
        fs.appendFile('./testFile.txt', '\nAnother line', (err) => {
            if (err) throw err;
            fs.readFile('./testFile.txt', 'utf-8', (err, data) => {
                console.log(data);
            })
        })
    }
});


if (fs.existsSync('css')) {
    console.log('La carpeta CSS ya existe...');
} else {
    fs.mkdir('css', (err) => {
        if (err) {
            throw (err);
        }
        console.log('La carpeta ha sido creada...')
    });
}

// Crear un nuevo directorio (carpeta)


