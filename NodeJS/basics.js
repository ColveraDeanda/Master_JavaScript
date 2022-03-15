var path = require("path")

// Variables globales
console.log(__dirname) // Get absolute path of the folder where the current JavaScript file resides.
console.log(__filename) // __dirname + currentFileName
let fileName = path.basename(__filename)
console.log(`My file name is: ${fileName}`)

// console.log(process.argv) // Procesos que se estan utilizando para la compilacion.
if(process.argv.length > 2) {
    process.argv.splice(0, 2)
    printProccess(process.argv[0], process.argv[1])
}
function printProccess(name, surname) {
    console.log(`Your name is ${name} \nYour surname is ${surname}`)
}

// Entrada y salida en consola
process.stdin.on('data', (data) => {
    let nombre = data.toString();
    process.stdout.write(`Tu nombre es: ${nombre}`);
    process.exit();
})
