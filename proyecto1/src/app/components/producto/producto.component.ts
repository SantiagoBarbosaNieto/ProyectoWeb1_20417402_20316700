import { Component, OnInit } from '@angular/core';
import { Juego } from 'src/app/models/juego.model';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Administrador,Usuario } from 'src/app/models/usuario.model';
import { TiendaService } from 'src/app/services/tienda.service';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { TiendaComponent } from '../tienda/tienda.component';


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private router:Router,public _tiendaService:TiendaService) { }

  nombreNuevo:string;
  precioNuevo:number;
  nuevoDescripcion:string;
  nuevoAutor:string;
  nuevoJuegoAgregar:Juego;
  correcto:boolean = true;

  ngOnInit(): void {
  }

  public publicarJuego():void
  {
    if(this.nombreNuevo == undefined || this.nombreNuevo =='' )
    {
      alert("No se ha ingresado un nombre");
      this.correcto = false;
    }
    if(this.precioNuevo == null)
    {
      alert("No se ha ingresado un precio");
      this.correcto = false;
    }
    if(this.nuevoDescripcion == undefined || this.nuevoDescripcion =='' )
    {
      alert("No se ha ingresado una Descripcion");
      this.correcto = false;
    }

    if(this.nuevoAutor == undefined || this.nuevoAutor =='' )
    {
      alert("No se ha ingresado una Compañia desarrolladora");
      this.correcto = false;
    }

    if(this.correcto == true)
    {
      this.nuevoJuegoAgregar = new Juego(this.precioNuevo,this.nombreNuevo,this.nuevoAutor,this.nuevoDescripcion,"/assets/elden-ring.jpg");
      this._tiendaService._juegos.push(this.nuevoJuegoAgregar);
      alert("Se ha agredado el Juego");
      this.iraTienda();
    }
  }
  public iraTienda():void
  {
    this.router.navigateByUrl('/');
  }
}
