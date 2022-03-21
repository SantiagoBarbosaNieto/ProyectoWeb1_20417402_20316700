import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  constructor(public _tiendaService:TiendaService) { }

  ngOnInit(): void {
  }

  public getJuegos():Juego[]
  {
    return this._tiendaService.juegos;
  }

}
