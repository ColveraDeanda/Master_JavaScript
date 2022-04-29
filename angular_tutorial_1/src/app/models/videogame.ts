export class Videojuego {

    nombre;
    precio;
    tipo;
    marca;
    stock;

    constructor(nombre: string, precio: number, tipo: string, marca: string, stock: boolean) {
        this.nombre = nombre;
        this.precio = precio;
        this.tipo = tipo;
        this.marca = marca;
        this.stock = stock;
    } 



}