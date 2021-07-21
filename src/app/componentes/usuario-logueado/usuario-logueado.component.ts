import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-logueado',
  templateUrl: './usuario-logueado.component.html',
  styleUrls: ['./usuario-logueado.component.scss']
})
export class UsuarioLogueadoComponent implements OnInit {

  @Input() nombre: string
  @Input() beneficiario: string
  @Input() imagen: string


  constructor() { }

  ngOnInit(): void {
  }

}
