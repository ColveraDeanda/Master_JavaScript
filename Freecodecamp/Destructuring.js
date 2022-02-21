// Para asignar variables de un obj de la forma tradicional:
const obj = {
    nombre: 'Cristobal',
    edad: 23
}
// let nombre = obj.nombre
// let edad = obj.edad
// console.log(nombre, edad)

// Usando la sintaxis de desestructuración de ES6
const { nombre, edad } = obj
console.log(nombre, edad)

// Para hacer lo mismo, pero asignandole algun nuevo nombre de variable seria:
const { nombre: miNombre, edad: miEdad } = obj
console.log(miNombre, miEdad)

// NOTA: Se pueden desesctructurar 1 o mas propiedades, como se necesite.

// Para desestructurar objetos dentro de otro objeto seria:
let LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};

let { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST
console.log(lowToday, highToday);

// Destructurando variables y arreglos:
let a = 8
let b = 6;
let [num1, num2] = [b, a];
console.log(num1, num2)

let otroArray = [1, 2, 3, 4, 5, 6]
const [i, j, ...k] = otroArray
console.log(i, j, k)

// Una forma de desestructurar un arreglo es usando la tecnica rest
let numeros = [1, 2, 3, 4, 5, 6, 6, 7]
let [aa, bb, cc, ...newArray] = numeros
console.log(aa, bb, cc, newArray)


// Es posible pasar el objeto como parametro a una funcion y ahi mismo empezar la desectructuracion.
const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
};
const half = ({ max, min }) => {
    return (max + min) / 2.0;
}
console.log(half(stats))


// Craciion de un objeto literal
const getMousePosition = (x, y) => ({
    x: x,
    y: y
});

// Abreavido seria:
const getMousePositionn = (x, y) => ({ x, y });
console.log(getMousePositionn('hola,', 1000))


// Funciones dentro de objetos
const otroObject = {
    nombre: 'Cristobal',
    getEdad() {
        return 23
    }
}
console.log(otroObject.getEdad())






