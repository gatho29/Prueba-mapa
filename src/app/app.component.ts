import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  location;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Obtiene una ubicacion enviado desde un componente hijo
   * @param location 
   */
  getLocation(location) {
    this.location = location;
  }
}
