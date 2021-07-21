import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MapaComponent } from './mapa/mapa.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ComponentesModule } from '../componentes/componentes.module';


@NgModule({
  declarations: [
    MenuComponent,
    MapaComponent,
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
    MenuComponent,
    MapaComponent,
    NavegacionComponent
  ]
})
export class LayoutModule { }
