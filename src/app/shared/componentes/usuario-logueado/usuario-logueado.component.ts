import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-logueado',
  templateUrl: './usuario-logueado.component.html',
  styleUrls: ['./usuario-logueado.component.scss']
})
export class UsuarioLogueadoComponent implements OnInit {

  @Input() name: string
  @Input() role: string
  @Input() image: string


  constructor() { }

  ngOnInit(): void {
  }

}
