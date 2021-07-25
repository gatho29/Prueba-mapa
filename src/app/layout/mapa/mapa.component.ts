import { Component, Input, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MapaServicioService } from 'src/app/shared/servicios/mapa-servicio.service';

declare const google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, OnDestroy {

  @Input() autocomplete;
  @Input() locationUrl;

  markersDataSubs: Subscription;

  markers: any = [];
  favoriteMarkers: any = [];

  initLatitud = 10.96854;
  initLongitud = -74.78132;
  drawedRoute;
  zoom = 7;
  map;

  directionsService = new google.maps.DirectionsService();

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private servicioMapas: MapaServicioService) { }

  ngOnInit(): void {
    window.addEventListener('resetMap', () => this.resetData());
    window.addEventListener('addFavoriteMarker', () => this.addFavoriteMarker());
    window.addEventListener('drawRoute', () => this.drawRouteFromNavigation());

    this.getRouteParams();
  }

  ngOnDestroy(): void {
    this.markersDataSubs && this.markersDataSubs.unsubscribe();
  }

  /**
   * Se ejecuta despues de que el mapa cargo completamente
   * @param event 
   */
  mapData(event) {
    this.map = event;

    this.locationUrl.origin.lat ? this.getUrlLocation() : this.getDataRoute();
  }

  /**
   * Obtiene los datos de las direcciones de la api(JSON creado) a ser dibujadas
   */
  getDataRoute() {
    this.markersDataSubs = this.servicioMapas.geRoute()
      .subscribe(
        response => {
          this.markers = response;

          const [origin, destination] = this.markers;
          this.drawRoute({ lat: origin.origin.latitud, lng: origin.origin.longitud }, { lat: destination.origin.latitud, lng: destination.origin.longitud });
        },
        error => console.log(error)
      );
  }

  /**
   * Obtiene los parametros que se envian por la url
   */
  getRouteParams(): void {
    this.route.params.subscribe(params => {
      this.locationUrl = {
        origin: { lat: params.oriLat, lng: params.oriLng },
        destination: { lat: params.desLat, lng: params.desLng }
      }

      // TODO: REMOVER LA RUTA ANTERIOR
      this.removeAllMarkers();
      this.getUrlLocation();
    });
  }

  /**
   * Obtiene los datos de ubicacion que son enviados por url
   */
  getUrlLocation(): void {
    try {
      const origin = {
        lat: parseFloat(this.locationUrl?.origin?.lat || 0),
        lng: parseFloat(this.locationUrl?.origin?.lng || 0),
      }

      const destination = {
        lat: parseFloat(this.locationUrl?.destination?.lat || 0),
        lng: parseFloat(this.locationUrl?.destination?.lng || 0),
      }

      this.drawRoute(origin, destination);
    } catch (e) {
      console.log(e);
    }
  }

  /**
   * Dibuja una rura en el mapa
   * @param origin 
   * @param destination 
   */
  drawRoute(origin: any, destination: any) {
    const request = {
      origin,
      destination,
      travelMode: 'DRIVING'
    };

    this.directionsService.route(request, (result, status) => {
      if (status === 'OK') {
        this.removeAllMarkers();

        this.drawedRoute = new google.maps.Polyline({
          path: result.routes[0].overview_path,
          strokeColor: '#E74C3C',
          strokeWeight: 3,
          map: this.map
        });

        this.addMarker(origin.lat, origin.lng, 9);
        this.addMarker(destination.lat, destination.lng);
      }
    });
  }

  /**
   * Dibuja una ruta con los datos ingresados en los campos de navegacion
   */
  drawRouteFromNavigation(): void {
    const origin = JSON.parse(localStorage.getItem('origin'));
    const destination = JSON.parse(localStorage.getItem('destination'));

    const route = `/oriLat/${origin.lat}/oriLng/${origin.lng}/desLat/${destination.lat}/desLng/${destination.lng}`;
    this.router.navigate([route])
  }

  /**
   * Agrega un marcador
   */
  addMarker(lat: number, lng: number, zoom?: number): void {
    const marker = {
      origin: {
        latitud: lat,
        longitud: lng,
      }
    }
    this.markers.push(marker);

    if (zoom) {
      this.initLatitud = marker.origin.latitud;
      this.initLongitud = marker.origin.longitud;

      this.zoom = zoom;
    }
  }

  /**
   * Agrega al mapa el marcador de un sitio favorito
   */
  addFavoriteMarker(): void {
    this.favoriteMarkers = JSON.parse(localStorage.getItem('markers'));

    this.favoriteMarkers.length > 0 && this.favoriteMarkers.map(marker => {
      this.addMarker(marker.lat, marker.lng, 11);
    })
  }

  /**
   * Destruye el observable que trae la informacion de los marcadores a mostrar y borra todo los marcadores
   */
  removeAllMarkers(): void {
    this.markersDataSubs && this.markersDataSubs.unsubscribe();
    localStorage.clear();
    this.markers = [];
  }

  /**
   * Restable los valores por defecto del mapa
   */
  resetData(): void {
    this.getDataRoute();
    this.initLatitud = 10.96854;
    this.initLongitud = -74.78132;
    this.zoom = 9;
  }

}
