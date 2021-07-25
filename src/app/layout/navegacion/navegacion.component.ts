import { Component, EventEmitter, OnInit, OnDestroy, Output, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { Subscription } from 'rxjs';
import { MapaServicioService } from 'src/app/shared/servicios/mapa-servicio.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit, OnDestroy {

  @Output() marker = new EventEmitter();
  @Output() resetMap = new EventEmitter();
  @ViewChild("placesRef") placesRef: GooglePlaceDirective;

  favoriteSubs: Subscription;

  favorites;
  latitude;
  longitude;

  options = { types: [], componentRestrictions: { country: 'CO' } }

  constructor(private mapServices: MapaServicioService) { }

  ngOnInit(): void {
    this.getFavoriteLocations();
  }

  ngOnDestroy(): void {
    this.favoriteSubs && this.favoriteSubs.unsubscribe();
  }

  /**
   * Obtiene las direcciones favoritas
   */
  getFavoriteLocations(): void {
    this.mapServices.getFavoriteLocations()
      .subscribe(
        response => this.favorites = response,
        error => console.log(error)
      );
  }

  /**
   * Envia la ubicacion seleccionada al componente padre
   * @param location 
   */
  setLocation(location) {
    const latLng = {
      latitude: location.origin.latitud,
      longitude: location.origin.longitud,
    }

    this.marker.emit(latLng);
  }

  /**
   * Dispara el evento resetMap que reinica la variable con todos las rutas
   */
  dispatchEventResetMap(): void {
    window.dispatchEvent(new Event('resetMap'));
  }

}
