import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { presupuestoComponent } from './Presupuesto/presupuesto.component';
import { galeriaComponent } from './Galeria/galeria.component';
import { inicioComponent } from './Inicio/inicio.component';
import { formularioComponent } from './Formulario/formulario.component';
import { datosComponent } from './Datos/datos.component';
import { AppLoginComponent } from './app-login/app-login.component';

@NgModule({
  declarations: [
    AppComponent,
    presupuestoComponent,
    galeriaComponent,
    inicioComponent,
    formularioComponent,
    datosComponent,
    AppLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
