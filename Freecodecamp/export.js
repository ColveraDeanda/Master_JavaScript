/** Si quiero hacer uso de una funcion en varios archivos, se tiene que exportar
 * de la siguiente manera:
 */
let op_math = (a,b) => {
    return a + b
}

// Se puede hacer asi:
let op_math2 = (a,b) => {
    return a * b
}

// O agregar todos los metodos en un solo export separados por coma:
export { op_math, op_math2 }