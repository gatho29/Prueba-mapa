import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MapaComponent } from './layout/mapa/mapa.component';

const routes: Routes = [
  { path: '', component: MapaComponent },
  { path: 'oriLat/:oriLat/oriLng/:oriLng/desLat/:desLat/desLng/:desLng', component: MapaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
