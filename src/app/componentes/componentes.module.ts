import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLogueadoComponent } from './usuario-logueado/usuario-logueado.component';



@NgModule({
  declarations: [
    UsuarioLogueadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UsuarioLogueadoComponent

  ]
})
export class ComponentesModule { }
