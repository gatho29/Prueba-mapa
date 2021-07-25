import { Component, OnInit } from '@angular/core';

interface ServiceUser {
  icon: string;
  name: string;
}
@Component({
  selector: 'app-servicio-usuario',
  templateUrl: './servicio-usuario.component.html',
  styleUrls: ['./servicio-usuario.component.scss']
})
export class ServicioUsuarioComponent implements OnInit {


  serviceUser: Array<ServiceUser>;

  constructor() { }

  ngOnInit(): void {
    this.serviceUser = [
      { icon: 'icon fas fa-user', name: 'Para mi' },
      { icon: 'fas fa-user-friends', name: 'Colega' },
      { icon: 'fas fa-user-plus', name: 'Invitado' },
    ]
  }

}
