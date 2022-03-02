class Persona {
    constructor(name, apellido) {
        this.name = name
        this.apellido = apellido
    }
}

Persona.prototype.edad = 80
Persona.prototype.getMsj = function () {
    return 'holaaaaa'
}

const cris = new Persona('Cristobal', 'Olvera')
console.log(cris.edad, cris.getMsj(), 'TESTING')


console.log(Persona.prototype.isPrototypeOf(cris)) // true
console.log(cris.constructor == Persona) // true
console.log(cris instanceof Persona) // true

let protProperties = Object.create(Persona.prototype)
console.log(protProperties.edad) // 34
console.log(protProperties.getMsj()) // holaaaaa

function estudiante() {}

estudiante.prototype = Object.create(Persona.prototype) // estudiante.prototype va a heredar todo lo de Persona.prototype
estudiante.prototype.constructor = estudiante // modificando el constructor (Por defecto se pone como Persona)
const nuevaEstudiante = new estudiante() // Heredando las propiedades prototype de Persona
estudiante.prototype.getMsj = function () {
    return 'Sobrescribiendo el metodo getMsj de Persona.prototype.'
}  

console.log(nuevaEstudiante.edad, nuevaEstudiante.getMsj())

 
