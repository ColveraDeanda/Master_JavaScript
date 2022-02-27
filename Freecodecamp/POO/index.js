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

// Protoype: Permite agregar nuevas propiedades o funciones a un constructor de objetos (clase)
//           desde fuera del bloque de codigo original.
Gatos.prototype.newProperty = 'Nueva propiedad'
const gato2 = new Gatos('Myssy', 8, 2, 'Whizkas', 'uguygu')

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
console.log(gato2.constructor == Gatos)
console.log(gato2 instanceof Gatos)
