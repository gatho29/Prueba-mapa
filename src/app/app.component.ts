import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  markers: Array<any> = [];

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Obtiene una ubicacion enviado desde un componente hijo, lo almacena en localStorage y
   * dispara el evento que agrega un marcador desde el componente mapa(padre)
   * @param location 
   */
  getLocation(location) {
    this.markers.push(location);
    localStorage.setItem('markers', JSON.stringify(this.markers));
    window.dispatchEvent(new Event('addFavoriteMarker'));
  }
}
