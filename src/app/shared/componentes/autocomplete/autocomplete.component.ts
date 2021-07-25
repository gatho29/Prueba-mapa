import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Address } from 'ngx-google-places-autocomplete/objects/address';


@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {

  @Input() locationName: 'origin' | 'destination';
  @Output() location = new EventEmitter();

  options = { types: [], componentRestrictions: { country: 'CO' } }
  autocomplete;

  constructor() { }

  ngOnInit(): void {
    window.addEventListener('resetAutoComplete', () => this.autocomplete = '',);
  }

  /**
   * Obtiene la informacion de una ubicacion y la manda al componente mapa para dibujar el marker
   * @param address 
   */
  public autoCompleteGoogleMaps(address: Address) {
    const latLng = {
      lat: address.geometry.location.lat(),
      lng: address.geometry.location.lng(),
    }

    localStorage.setItem(this.locationName == 'origin' ? 'origin' : 'destination', JSON.stringify(latLng))
  }



}
