import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideogameComponent } from './videogame/videogame.component'
import { AnimalComponent } from './animal/animal.component';
import { RopaComponent } from './ropa/ropa.component';

/**
 * @NgModule = Decorador para configurar el module
 */
@NgModule({
  declarations: [  // declarations = Sirve para cargar nuestros componentes, pipes, directivas, etc..
    AppComponent,
    VideogameComponent,
    AnimalComponent,
    RopaComponent
  ],
  imports: [ // imports = Sirve para cargar modulos propios de Angular, o externos o por nosotros.
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], // providers = Sirve para cargar servicios.
  bootstrap: [AppComponent]  // bootstrap = Sirve para establecer el componente principal que se cargara.
})
export class AppModule { } // AppModule ya contiene la configuracion de su decorador.
