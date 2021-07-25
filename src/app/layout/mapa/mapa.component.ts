import { Component, Input, OnInit, OnChanges, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { MapaServicioService } from 'src/app/shared/servicios/mapa-servicio.service';

declare const google;
@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss']
})
export class MapaComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

  @Input() autocomplete;
  @Input() locationUrl;

  routesDataSubs: Subscription;

  routeMap: any = [];
  initLatitud = 10.96854;
  initLongitud = -74.78132;
  zoom = 9;
  map;

  directionsService = new google.maps.DirectionsService();

  constructor(
    private servicioMapas: MapaServicioService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    window.addEventListener('resetMap', () => this.resetData());
    this.getRouteParams();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['autocomplete'].isFirstChange()) {
      this.addMarker();
    }
  }

  ngAfterViewInit() {
    this.getUrlLocation()
  }

  ngOnDestroy(): void {
    this.routesDataSubs && this.routesDataSubs.unsubscribe();
  }

  /**
   * Obtiene los parametros que se envian por la url
   */
  getRouteParams(): void {
    this.route.params.subscribe(params => {
      this.locationUrl = {
        origin: {
          latitude: params.oriLat,
          longitude: params.oriLng
        },
        destination: {
          latitude: params.desLat,
          longitude: params.desLng
        }
      }
    });
  }

  getUrlLocation(): void {
    const origin = {
      lat: parseFloat(this.locationUrl?.origin?.latitude || 0),
      lng: parseFloat(this.locationUrl?.origin?.longitude || 0),
    }

    const destination = {
      lat: parseFloat(this.locationUrl?.destination?.latitude || 0),
      lng: parseFloat(this.locationUrl?.destination?.longitude || 0),
    }

    console.log(origin);
    console.log(destination);

    this.drawRoute(origin, destination);
  }

  /**
   * Funcion que almacena el evento del mapa cuando ya termino de cargar
   * @param event 
   */
  mapData(event) {
    this.map = event;
    this.getDataRoute();
    this.getUrlLocation();
  }


  /**
   * Obtiene los datos de las direcciones a ser dibujadas
   */
  getDataRoute() {
    this.routesDataSubs = this.servicioMapas.geRoute().subscribe(
      response => {
        this.routeMap = response;

        const [origin, destination] = this.routeMap;
        this.drawRoute({ lat: origin.origin.latitud, lng: origin.origin.longitud }, { lat: destination.origin.latitud, lng: destination.origin.longitud });
      },
      error => console.log(error)
    );
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
        console.log(result.routes[0].overview_path,);

        new google.maps.Polyline({
          path: result.routes[0].overview_path,
          strokeColor: '#E74C3C',
          strokeWeight: 3,
          map: this.map
        });

        this.routeMap.push(origin);
        this.routeMap.push(destination);
      }
    });
  }

  /**
   * Agrega un marcador
   */
  addMarker(): void {
    const marker = {
      origin: {
        latitud: this.autocomplete?.latitude,
        longitud: this.autocomplete?.longitude,
      }
    }

    this.routeMap.push(marker);
    this.initLatitud = marker.origin.latitud;
    this.initLongitud = marker.origin.longitud;
    this.zoom = 11;
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
