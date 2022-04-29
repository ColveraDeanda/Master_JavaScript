import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.css']
})
export class RopaComponent implements OnInit, DoCheck, OnDestroy {

  public greeting: string;
  public checkMessage: boolean;
  public message: boolean = false;
  public hideOrShow: string = 'Mostrar';

  constructor() {
    this.greeting = '1er mensaje';
    this.checkMessage = true;
   }

  ngOnInit(): void { // ngOnInit que se ejecutara al cargar el componente despues del constructor.
    
  }

  ngDoCheck(): void {  // ngDoCheck se ejecutara cuando se detecte algun cambio.
    console.log('ngDoCheck executing..');
  }

  ngOnDestroy(): void {  // ngOnDestroy se ejecutara cuando se oculte o elimine el componente
    
  }



  changeGretting():void {
    if(this.checkMessage) {
      this.greeting = 'You click the button !!!! OMG :D';
      this.checkMessage = false;
    } else {
      this.greeting = 'Helloooo!!!!';
      this.checkMessage = true;
    }
  }

  showMessage():void {
   if(!this.message) {
     this.hideOrShow = 'Ocultar';
     this.message = true;
   } else {
    this.hideOrShow = 'Mostrar';
     this.message = false;
   }
    
  }



}
