import { Component, OnInit } from '@angular/core';

interface Menu {
  icon: string;
  name: string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  itemsMenuDesktop: Array<Menu>;
  itemsMenuMobile: Array<Menu>;

  constructor() { }

  ngOnInit(): void {
    this.onInitItemsMenu();
  }

  onInitItemsMenu(): void {
    this.itemsMenuDesktop = [
      { icon: 'fab fa-usps', name: 'Pedir Aguila' },
      { icon: 'fas fa-fighter-jet', name: 'Vuelos' },
      { icon: 'fas fa-route', name: 'Rutas' },
      { icon: 'fas fa-user-cog', name: 'Administrar' },
      { icon: 'fas fa-chart-bar', name: 'Estadisticas' },
      { icon: 'fas fa-pager', name: 'Medios de pago' },
      { icon: 'fas fa-sign-out-alt', name: 'Cerrar sesión' },
    ];

    this.itemsMenuMobile = [
      { icon: 'fab fa-usps', name: 'Pedir Aguila' },
      { icon: 'fas fa-fighter-jet', name: 'Vuelos' },
      { icon: 'fas fa-route', name: 'Rutas' },
    ]
  }

}
