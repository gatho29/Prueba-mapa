import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() locationName: 'origen' | 'destino';
  @Output() location = new EventEmitter();

  latitude: number;
  longitude: number;

  options = { types: [], componentRestrictions: { country: 'CO' } }

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Obtiene la informacion de una ubicacion y la manda al componente mapa para dibujar el marker
   * @param address 
   */
  public autoCompleteGoogleMaps(address: Address) {
    this.latitude = address.geometry.location.lat();
    this.longitude = address.geometry.location.lng();

    const latLng = {
      latitude: this.latitude,
      longitude: this.longitude,
    }

    this.location.emit(latLng)
  }



}
