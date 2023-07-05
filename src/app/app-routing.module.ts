import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicioComponent } from './Inicio/inicio.component';
import { datosComponent } from './Datos/datos.component';
import { formularioComponent } from './Formulario/formulario.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { galeriaComponent } from './Galeria/galeria.component';

const routes: Routes = [
  {path:"", component: inicioComponent},
  {path:"inicio", component: inicioComponent},
  {path:"datos", component: datosComponent},
  {path:"formulario", component: formularioComponent},
  {path:"login", component: AppLoginComponent},
  {path:"galeria", component: galeriaComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
