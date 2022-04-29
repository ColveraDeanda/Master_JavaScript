import { Component, OnInit } from '@angular/core';
import { Videojuego } from '../models/videogame'

@Component({
    selector: 'app-videogame',
 // template: ` ` (Es posible poner aqui el HTML con la propiedad template)
    templateUrl: './videogame.component.html',
    styleUrls: ['./videogame.component.css' ]
})
export class VideogameComponent implements OnInit { 

    public videogames: string[] = ['Dark Souls', 'Mario Bros', 'Halo', 'Call of dufty'];
    public titleVideogame: string = 'Titulooooo...';
    public videoJuegos: Array<Videojuego>;
    public videoGamesNames: String[] = [];

    constructor() {
        this.videoJuegos = [ 
            new Videojuego('Halo', 400, 'Shooter', '343', true),
            new Videojuego('Gears of war', 1000, 'Shooter', '343', true),
            new Videojuego('Halo', 1000, 'Shooter', '343', true),
            new Videojuego('Gears of war', 200, 'Shooter', '343', true)
        ];
    }

    ngOnInit(): void {
        this.videoGames();
    }

    videoGames() {
        this.videoJuegos.forEach((value, index) => {
            if(!this.videoGamesNames.includes(value.nombre)) {
                this.videoGamesNames.push(value.nombre);
            }
        });
        console.log(this.videoGamesNames);
        
    }

}