const os = require('os');
const fs = require('fs')
const path = require('path');
const ultilsModule = require('./utils')
const alternativeExportSyntax = require('./alterrnativeExportSyntax');
const res = require('express/lib/response');

console.log(__dirname)
console.log(__filename)
//console.log(process)

console.log(ultilsModule.name1);
console.log(ultilsModule.name2);
console.log(ultilsModule.basicOperation(100, 40));

console.log(alternativeExportSyntax.unGato);

require('./another') // Trayendo un pedazo de codigo de otro fichero.

let oPSystem = {
    userInfo: os.userInfo(),
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(oPSystem);

const filePath = path.join(__dirname, 'login', 'successfully');
console.log(path.basename(filePath));

// Leer y modificar sincronamente
const file1 = fs.readFileSync('./archivos/archivo.txt', 'utf-8');
const file2 = fs.readFileSync('./archivos/archivo2.txt', 'utf-8')
fs.writeFileSync('./archivos/result.txt', `${file1} fwef ${file2} \n`, {flag: 'a'});

// Leer y modificar asincronamente
fs.readFile('./archivos/archivo.txt', 'utf-8', (err, data) => {
    if(err) return err;
    const dataFile1 = data;
    fs.readFile('./archivos/archivo2.txt', 'utf-8', (err, data) => {
        if(err) return err;
        const dataFile2 = data
        fs.writeFile('./archivos/resultAsync.txt', `Data is ${dataFile1} and ${dataFile2} \n`, {flag: 'a'}, (err, res) => {
            if(err) return err;
            console.log('Se ha escrito el documento correctamente...');
        });
    });
});