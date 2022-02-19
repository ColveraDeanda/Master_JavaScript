// Es posible mutar (modificar) un arreglo a pesar de que sea const, esto se hace accediendo al elemento.
const arr = [1,2,3,4,5]
arr[0] = 1000
console.log(arr)

// Esto se puede evitar usando => Object.freeze(obj) y prevenir la mutación de datos.
Object.freeze(arr)
arr[0] = 4444
console.log(arr)
