const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

var personas = {
    nombre: '',
    comentarios: []
}

rl.question('Cuantos años tienes? ', (answer) => {
    personas.nombre = answer;
    rl.setPrompt('Dime un comentario: ') // Se setea el prompt.
    rl.prompt() // Se imprime el prompt.

});

rl.on('line', (input) => { // El evento line se desparara cada vez que se presione enter.
    if(input.trim() === 'salir') {
        process.exit()
    }
    personas.comentarios.push(input)
    printComments()
    rl.setPrompt('Algun otro comentario? ')
    rl.prompt()
});

function printComments() {
    console.log('Tus comentarios son:');
    let comments = [...personas.comentarios];
    for(let i = 0; i < comments.length; i++) {
        console.log(`Tu comentario es: ${comments[i]}`)
    }
}




  