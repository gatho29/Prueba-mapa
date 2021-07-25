import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { MapaComponent } from './mapa/mapa.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { AgmCoreModule } from '@agm/core';
import { ComponentesModule } from '../shared/componentes/componentes.module';
import { HttpClientModule } from '@angular/common/http';
import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MenuComponent,
    MapaComponent,
    NavegacionComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    AgmCoreModule.forRoot({ apiKey: "AIzaSyCMvITwU0xc2G5-j_9gF8O4aED5qAbv8K0" }),
    HttpClientModule,
    GooglePlaceModule,
    FormsModule
  ],
  exports: [
    MenuComponent,
    MapaComponent,
    NavegacionComponent
  ]
})
export class LayoutModule { }
