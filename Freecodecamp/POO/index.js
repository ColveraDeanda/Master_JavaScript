// Podemos usar instanceof para comprobar si un objeto esta haciendo la instancia a alguna clase
// o metodo constructor
class Gatos {
    constructor(nombre, age, weight, favoriteFood) {
        this.nombre = nombre
        this.age = age
        this.weight = weight
        this.favoriteFood = favoriteFood
    }
}

const gato1 = new Gatos('Myssy', 8, 2, 'Whizkas')
console.log(gato1 instanceof Gatos) // true

let gato = []
for(let property in gato1) {
    gato.push(gato1[property])
}
gato

// Protoype: Permite agregar nuevas propiedades o funciones a un constructor de objetos (clase)
//           desde fuera del bloque de codigo original.
Gatos.prototype.newProperty = 'Nueva propiedad'
const gato2 = new Gatos('Myssy', 8, 2, 'Whizkas', 'uguygu')
console.log(gato2)
let ownProp = []
let protProp = []

for(let property in gato2) {
    if(gato2.hasOwnProperty(property)) {
        ownProp.push(property)
    } else {
        protProp.push(property)
    }
}

ownProp
protProp

// La propiedad constructor hace referencia a la función constructor que creo la instancia. 
console.log(gato2.constructor)
console.log(gato2 instanceof Gatos)


// Una forma eficiente de agreagar nuevas propiedades o funciones al prototype es de la sig. manera:
Gatos.prototype = {
    constructor: Gatos,  // Es necesario establecer el constructor de nuevo al usar prototype. ya que este es borrado por prototype.
    color: 'Black and White',
    printName: function () {
        console.log('Hola Gato')
    }
}
console.log(gato2)
// Comprobando si gato2 hereda su prototype de Gatos
console.log(Gatos.prototype.isPrototypeOf(gato2))

// A nievel de Object tambien se puede validar:
console.log(Object.prototype.isPrototypeOf(Gatos.prototype))

// NOTA: TODOS LOS OBJETOS (con algunas excepciones) TIENEN UN PROTOTYPE.


// Creando una instancia de Gatos.prototype (De esta forma se estan heredando las propiedades del padre).
let instanciaGato = Object.create(Gatos.prototype)

/////////////////////////////////////////////////////////////////////////////////////////////////////////
function miniGato() {}

// El obj prototype hijo (miniGato), va a heredar todo lo del prototype padre (Gatos.prototype)
miniGato.prototype = Object.create(Gatos.prototype)
let miniG = new miniGato()

// Cuando un objeto hereda el prototype de otro objeto, también hereda la propiedad del constructor del supertipo (padre)
// Para ello, puedes establecer manualmente la propiedad del constructor al hijo
miniGato.prototype.constructor = miniGato


