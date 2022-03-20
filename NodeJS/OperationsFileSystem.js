const fs = require('fs');

// Renombrar archivo
fs.access('./testFile.txt', fs.constants.F_OK, (err) => {
    if (!err) {
        fs.rename('./testFile.txt', './config.txt', (err) => {
            if (err) throw err;
            console.log('Se modifico el archivo...');
        });
    }
});

// Mover archivo (La carpeta tiene que estar creada)
fs.rename('./config.txt', './src/config.txt', (err) => {
    if (err) {
        throw err;
    }
    console.log('El archivo de movio exitosamente...');
})


// Eliminar un archivo
fs.unlink('./delete.txt', (err) => {
    if(err) throw err;
    console.log('Archivo eliminado...');
})
