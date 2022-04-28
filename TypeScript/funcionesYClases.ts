/**
 * Interfaz: Es un contrato en el que se definen que propiedades y metodos tendra una clase
 */
import { RopaBase } from './interface';

let sumarNumeros = (num1: number, num2: number): number => {
    return num1 + num2;
}

console.log(sumarNumeros(10, 1000));

// Decorador
function estampar(logo: string) {
    return function(tarjet: Function) {
        tarjet.prototype.estampacion = function():void {
            console.log('Ropa con la estampa: ' + logo);
        }
    }
}

/**
 * Decorador: Adicionar una funcionalidad extra a cualquier clase.
 */
//@estampar('Rublex')
class Ropa implements RopaBase {
    sucia: boolean;
    color: string;
    marca: string;
    modelo: string;
    talla: string;
    precio: number;

    constructor(sucia, color, marca, modelo, talla, precio) {
        this.sucia = sucia;
        this.color = color;
        this.marca = marca;
        this.modelo = modelo;
        this.talla = talla;
        this.precio = precio;
    }

    public getColor(): string {
        return this.color;
    }

    public setColor(color: string) {
        this.color = color;
    }

}

const camiseta = new Ropa(false, 'red', 'patito', 'Nissan', 'BigX', 300);
console.log(camiseta);

// Heredando de la clase Ropa.
class Pantalon extends Ropa {
    private tela: string;

    public getTela() {
        return this.tela;
    }

    public setTela(tela: string) {
        this.tela = tela;
    }
}

const pantalon = new Pantalon(false, 'red', 'patito', 'Nissan', 'BigX', 300);
pantalon.setTela('Mezclilla');
pantalon.setColor('Violeta');
console.log(pantalon);



