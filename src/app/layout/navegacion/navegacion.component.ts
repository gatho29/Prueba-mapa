import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MapaServicioService } from 'src/app/shared/servicios/mapa-servicio.service';

@Component({
  selector: 'app-navegacion',
  templateUrl: './navegacion.component.html',
  styleUrls: ['./navegacion.component.scss']
})
export class NavegacionComponent implements OnInit {

  mapaSubscripcion: Subscription;
  obtenerMapa: any;

  constructor(private servicioMapas: MapaServicioService) { }

  ngOnInit(): void {
    this.obtenerInfoMapas();
  }


  obtenerInfoMapas() {
    this.mapaSubscripcion = this.servicioMapas.obtenerServicioMapas().subscribe(
      respuesta => {
        this.obtenerMapa = respuesta
        console.log(this.obtenerMapa);
      },
      error => console.log(error)
    );
  }

}
