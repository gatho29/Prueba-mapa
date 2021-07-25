import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsuarioLogueadoComponent } from './usuario-logueado/usuario-logueado.component';
import { ServicioUsuarioComponent } from './servicio-usuario/servicio-usuario.component';
import { AutocompleteComponent } from './autocomplete/autocomplete.component';
import { AgmCoreModule } from '@agm/core';
import { GooglePlaceModule } from 'ngx-google-places-autocomplete';


@NgModule({
  declarations: [
    UsuarioLogueadoComponent,
    ServicioUsuarioComponent,
    AutocompleteComponent
  ],
  imports: [
    CommonModule,
    GooglePlaceModule,
  ],
  exports: [
    UsuarioLogueadoComponent,
    ServicioUsuarioComponent,
    AutocompleteComponent
  ]
})
export class ComponentesModule { }
