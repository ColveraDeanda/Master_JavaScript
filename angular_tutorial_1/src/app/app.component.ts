import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';

// @Component = configuracion del componente
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   title = 'angular_tutorial_1';

   ngOnInit(): void {
     
   }
}
