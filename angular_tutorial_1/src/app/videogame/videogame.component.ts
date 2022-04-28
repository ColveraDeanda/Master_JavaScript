import { Component } from '@angular/core';

@Component({
    selector: 'app-videogame',
 // template: ` ` (Es posible poner aqui el HTML con la propiedad template)
    templateUrl: './videogame.component.html',
    styleUrls: ['./videogame.component.css' ]
})
export class VideogameComponent { 

    constructor() {
        console.log('VideogameComponent');
    }

}