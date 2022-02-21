/* Es posible crear objetos usando la palabra clave class.
   A class se le añade un constructor (que es un metodo especial para crear un objeto).
   Este constructor se invoca cuando new es llamdado al crear un nuevo objeto
*/
class Persona {
    constructor(nombre, edad, talla){
        this._nombre = nombre,
        this._edad = edad,  
        this._talla = talla
    }

    get getNombre() {
        return this._nombre;
    }

    set setNombre(newNombre) {
       this._nombre  = newNombre;
    }

}

let person = new Persona('Cris', 23, 1.80)
console.log(person.getNombre)
person.setNombre = 'Goose'
console.log(person.getNombre)

class Thermostat {
    constructor(temperature){
        this._temperature = temperature
    }

    get temperature() {
        return (5/9 * (this._temperature - 32))
    }

    set temperature(c) {
        this._temperature = (c * 9.0 / 5 + 32)
    }
}




