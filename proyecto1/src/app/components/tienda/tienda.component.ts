import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { Juego } from 'src/app/models/juego.model';
import { Administrador, Cliente } from 'src/app/models/usuario.model';
import { Venta } from 'src/app/models/venta.model';
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

  public auxP:AuxP = new AuxP();
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
    if(this.juegoSelected != null)
    {
      this.mostrarCompra = true;
      this.compraRealizada = false;
      localStorage.setItem('mostrarCompra', this.mostrarCompra.toString());
      window.scroll(0,0);

    }
  }

  private checkFormPago():boolean {
    if(this.auxP.nombre == undefined ||this.auxP.nombre == "" )
    {
      alert("Debe ingresar un nombre");
      return false;
    }
    if(this.auxP.tarjeta == undefined || this.auxP.tarjeta == "")
    {
      alert("Debe ingresar un número de tarjeta");
      return false;
    }
    if(isNaN(Number(this.auxP.tarjeta)))
    {
      alert("Debe ingresar un número de tarjeta válido");
      return false;
    }
    if(this.auxP.exp == undefined || this.auxP.exp == "")
    {
      alert("Debe ingresar una fecha de expiración");
      return false;
    }
    if(this.auxP.cvv == undefined || this.auxP.cvv == "")
    {
      alert("Debe ingresar el código de seguridad de la tarjeta");
      return false;
    }
    if(isNaN(Number(this.auxP.cvv)))
    {
      alert("Debe ingresar un código de seguridad válido");
      return false;
    }
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
      this.compraRealizada = true;
      this.mostrarCompra = false;

      let admin:Administrador = this._usuariosService.buscarAdminPorEmail(localStorage.getItem('email'));
      let venta:Venta = new Venta(admin,Date.now());
      venta.juego = this.juegoSelected;
      admin.agregarVenta(venta);
    

      alert("Su compra ha sido registrada con éxito");
    }
  }

  public cancelarCompra():void 
  {
    this.juegoSelected = null;
    this.mostrarCompra = false;
  }
  
  public irAnadir():void
  {
    this.router.navigateByUrl('/anadir');
  }

  public irModificar(id:number):void
  {
    this.router.navigateByUrl('/modificar');
  }

  public eliminarJuego():void
  {

  }
}

class AuxP 
{
  constructor(){
  }
  public nombre: string;
  public tarjeta: string;
  public exp: string;
  public cvv: string;
}