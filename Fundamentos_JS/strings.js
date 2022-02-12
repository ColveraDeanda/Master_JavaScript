/* String(value)debería tener el mismo resultado que value.toString()en todos los casos, 
excepto para valores sin propiedades como nullo undefined */
let miVariable = null
// console.log(miVariable.toString())
let newString = String(miVariable)
console.log(newString)
console.log(typeof newString)

let number = 1000
let newnumber = number.toString()
console.log(number)
console.log(typeof newnumber)

let bin = "0101"
console.log(parseInt(bin, 2))

console.log('1' == 1)