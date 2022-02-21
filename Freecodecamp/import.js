// Hay 2 formas de import, 1 poniendo especoficamente el metodo / modulo / variable que queramos:
import { op_math, op_math2 } from './export.js'
// O se puede importar todo lo que se esta exportando del archivo indicado.
import * as myMathModule from './export.js'

const num1 = 100
const num2 = 200
console.log(op_math(num1, num2))
console.log(myMathModule.op_math2(5, 10))