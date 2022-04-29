import { Component, OnInit } from '@angular/core';
import { Configuracion } from '../models/animal';

@Component({
    selector: 'app-animal',
    templateUrl: './animal.component.html',
    styleUrls: ['animal.component.css']
})
export class AnimalComponent implements OnInit {

    private catName: string = 'Missy';
    public descripcion: string;
    public config = Configuracion;

    constructor() {
        this.descripcion = Configuracion.descrpcion;
        console.log(this.descripcion);
        
    }

    ngOnInit(): void {
        
    }


    getCatName(): string {
        return this.catName;
    }
}