/** Si quiero hacer uso de una funcion en varios archivos, se tiene que exportar
 * de la siguiente manera:
 */
let op_math = (a,b) => {
    return a + b
}

// Se puede hacer asi:
export let op_math2 = (a,b) => {
    return a * b
}

// O agregar todos los metodos en un solo export separados por coma:
export { op_math, op_math2 }

/* Cuando se requiere exportar una sola cosa. Supongamos una clase de un archivo, se puede usar Export default
   - Sólo puede existir un sólo export default por archivo.
   - Y luego importarlo sin llaves:
*/
export default class Biblioteca {
    constructor(nombre = 'Cristobal', autor = 'wefwf', editorial = 234, edicion = 234){
        this._nombre = nombre
        this._autor = autor
        this._editorial = editorial
        this.edicion = edicion
    }

    get nombre () {
        return this._nombre;
    }

    set nombre (nombre) {
        this._nombre = nombre
    }
}