// no hay error. Las variables no están vinculadas rígidamente a un tipo de datos,
// Esto se conoce como "dinámicamente tipados".
let message = "hola";
message = 123456;
console.log(message)

/* VALORES NUMERICOS ESPECIALES: Infinity, -Infinity y NaN */
    // Infinity representa el Infinito matemático ∞. Es un valor especial que es mayor que cualquier número.
    console.log(Infinity, (1 / 0))
    // NaN representa un error de cálculo.
    console.log("hola" / 3)
    // Si hay un NaN en alguna parte de una expresión matemática, se propaga a todo el resultado 
    // (con una única excepción: NaN ** 0 
    console.log(NaN + 1)
    console.log(NaN ** 0)

/* BigInt: En JavaScript, el tipo “number” no puede representar valores enteros mayores que (2**53-1) 
(eso es 9007199254740991), o menor que -(2**53-1) para negativos. Se usa para criptografía o marcas 
de tiempo de precisión de microsegundos. */
    // la "n" al final significa que es un BigInt
    const bigInt = 1234567890123456789013n;


/* El significado de undefined es “valor no asignado”.
Si una variable es declarada pero no asignada, entonces su valor es undefined: */ 
let age;
console.log(age)
age = null // null = Valor vacio, valor desconocido.

/* ---------------------------------------------------------------- */ 
typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  

typeof null // "object" ==> El resultado de typeof null es "object". 
// Esto está oficialmente reconocido como un error de comportamiento de typeof que proviene de los primeros días de JavaScript.

typeof alert // "function"
