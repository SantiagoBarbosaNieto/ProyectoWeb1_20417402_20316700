import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Juego } from 'src/app/models/juego.model';
import { TiendaService } from 'src/app/services/tienda.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public esAdmin:boolean = false;
  public mostrarCompra:boolean = false;
  public juegoSelected:Juego = null;
  constructor(private router:Router, public _tiendaService:TiendaService) 
  { 
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
      }
  
      if (event instanceof NavigationEnd) {
          this.actualizar();
      }
  
      if (event instanceof NavigationError) {
          console.log(event.error);
      }
    });
  }

  ngOnInit(): void {
  }

  public getJuegos():Juego[]
  {
    return this._tiendaService.juegos;
  }

  public actualizar()
  {
    if(localStorage.getItem('rol') == 'administrador')
      this.esAdmin=true;
    else 
      this.esAdmin=false; 
  }

  public comprarJuego(id:number):void
  {
    this.juegoSelected = this._tiendaService.buscarJuego(id);
    this.mostrarCompra = true;
  }

  public cancelarCompra():void 
  {
    this.juegoSelected = null;
    this.mostrarCompra = false;
  }
}
