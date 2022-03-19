const exec = require('child_process').exec  // Modulo para ejecutar scripts o comandos por consola.

// Cuando se ejecute procesos.js, se ejecutara automaticamente un dir y el script.sh
exec('dir', (err, stdout) => {
    if(err) {
        throw err
    }
    console.log(stdout)
});

let x = 10;
let y = 15;

exec('script.sh ' + x + ' ' + y, (err, stdout) => {
    if(err) {
        throw err
    }
    console.log(stdout)
});
