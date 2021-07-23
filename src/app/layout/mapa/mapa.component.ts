import { GoogleMapsAPIWrapper } from '@agm/core';
import { GoogleMap } from '@agm/core/services/google-maps-types';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Coordenadas } from 'src/app/shared/componentes/interfaces/coordenadas';
import { MapaServicioService } from 'src/app/shared/servicios/mapa-servicio.service';

declare const google
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit {

  mapaSubscripcion: Subscription;
  obtenerMapa: any;
  ubicacionCentral: Coordenadas;
  coordenadas: Coordenadas[] = [];
  guardarEvento;

  directionsService = new google.maps.DirectionsService();


  constructor(private servicioMapas: MapaServicioService) { }

  ngOnInit(): void {
    this.ubicacionCentral = new Coordenadas(10.9685400, -74.7813200)
  }

  obtenerInfoMapas() {
    this.mapaSubscripcion = this.servicioMapas.obtenerRutasMarcadas().subscribe(
      (respuesta) => {
        this.obtenerMapa = respuesta
        const [origin, destination] = this.obtenerMapa
        this.calcRoute({ lat: origin.origin.latitud, lng: origin.origin.longitud }, { lat: destination.origin.latitud, lng: destination.origin.longitud });

      },
      error => console.log(error)
    );
  }


  calcRoute(origin: any, destination: any) {
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING'
    };
    this.directionsService.route(request, (result) => {
      const polyline = new google.maps.Polyline({
        path: result.routes[0].overview_path,
        strokeColor: '#E74C3C',
        strokeWeight: 3,
        map: this.guardarEvento
      });
    });
  }

  mapPrueba(event) {
    this.guardarEvento = event
    this.obtenerInfoMapas();
  }

}
