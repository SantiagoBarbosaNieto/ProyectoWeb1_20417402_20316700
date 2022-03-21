import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { Juego } from 'src/app/models/juego.model';
import { Cliente } from 'src/app/models/usuario.model';
import { TiendaService } from 'src/app/services/tienda.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public esAdmin:boolean = false;
  public mostrarCompra:boolean;
  public compraRealizada:boolean;
  public juegoSelected:Juego = null;
  constructor(private router:Router, public _tiendaService:TiendaService, public _usuariosService:UsuariosService) 
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
    this.mostrarCompra = false;
    this.compraRealizada = false;
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
    {
      this.esAdmin=false; 
    }
    
  }

  public seleccionarJuego(id:number):void
  {
    this.juegoSelected = this._tiendaService.buscarJuego(id);
    this.mostrarCompra = true;
    this.compraRealizada = false;
    localStorage.setItem('mostrarCompra', this.mostrarCompra.toString());
    window.scroll(0,0);
  }

  private checkFormPago():boolean {
    return true;
  }
  public comprarJuego():void
  {
    if(localStorage.getItem('rol') != 'cliente')
    {
      alert("Debe estar autenticado como cliente para realizar una compra. Será redirigido a la pantalla de autenticación.");
      this.router.navigateByUrl('/login');
      return;
    }
    if(!this.checkFormPago())
      return;
    if(this.juegoSelected != null)
    {
      let cliente:Cliente = this._usuariosService.buscarClientePorEmail(localStorage.getItem('email'));
      let compra:Compra = new Compra(cliente, Date.now());
      compra.juego = this.juegoSelected;
      compra.calcularTotal();
      cliente.agregarCompra(compra);
      debugger;
      this.compraRealizada = true;
      this.mostrarCompra = false;
    }
  }

  public cancelarCompra():void 
  {
    this.juegoSelected = null;
    this.mostrarCompra = false;
  }
}
