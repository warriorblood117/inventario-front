import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PropietarioComponent } from './componentes/propietario/propietario.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { CrearComponent } from './componentes/propietario/formularios/crear/crear.component';
import { MenuComponent } from './componentes/propietario/menu/menu.component';
import { EditarComponent } from './componentes/propietario/formularios/editar/editar.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PropietarioComponent,
    CrearComponent,
    MenuComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
