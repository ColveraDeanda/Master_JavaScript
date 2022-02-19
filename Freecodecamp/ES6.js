// Es posible mutar (modificar) un arreglo a pesar de que sea const, esto se hace accediendo al elemento.
const arr = [1, 2, 3, 4, 5]
arr[0] = 1000
console.log(arr)

// Esto se puede evitar usando => Object.freeze(obj) y prevenir la mutación de datos.
Object.freeze(arr)
arr[0] = 4444
console.log(arr)


// Uso de parametro por defecto. Solo se activara si no se especifica ese parametro al llamar la funcion.
const greeting = (name = "Anonymous") => "Hello " + name;
console.log(greeting("John"));
console.log(greeting());

// El parametro Rest: Sirve para crear variables con un numero variable de argumentos. Y se almacenan en un array.
const sum = (...args) => {
    return args.reduce((a, b) => a + b)
}
console.log(sum(1, 2, 3, 4))

// Operador Spread: Permite expandir un arreglo donde se esperan múltiples 
// parámetros o elementos. (Devuelve un arreglo desempacado).
let array = [1,2,3,4,5]
console.log(Math.max(...array))
let array3 = []
console.log(array3 = [...array])




