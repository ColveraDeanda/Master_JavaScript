/**
 * Crea una nueva promesa llamada makeServerRequest. Pásale una función con parámetros 
 * resolve y reject al constructor.
 */

// Una promesa tiene tres estados: pending, resolved, y rejected
let makeServerRequest = new Promise((resolve, reject) => {
    let condicion = true
    if(condicion) {
        resolve('Promesa resolved !!')
    } else {
        reject('Promesa rechazada :(')
    }
}).then(res => {
    console.log(res)
}).catch(err => {
    console.log(err)
})




// Tambien se puede separar el then o catch de esta forma:
makeServerRequest.then((result) => {
    console.log(result)
})

makeServerRequest.catch(err => {
    console.log(err)
})


