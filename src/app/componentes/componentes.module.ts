import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLogueadoComponent } from './usuario-logueado/usuario-logueado.component';
import { ServicioUsuarioComponent } from './servicio-usuario/servicio-usuario.component';



@NgModule({
  declarations: [
    UsuarioLogueadoComponent,
    ServicioUsuarioComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioLogueadoComponent,
    ServicioUsuarioComponent
  ]
})
export class ComponentesModule { }
