import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Compra } from 'src/app/models/compra.model';
import { Cliente } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  public cliente: Cliente = null;
  constructor(private router:Router, public _usuariosService:UsuariosService) 
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

  public actualizar():void
  {
    
  }
  public getCompras():Compra[]
  {
    let email = localStorage.getItem('email');

    if(email != null || email != "")
    {
      this.cliente = this._usuariosService.buscarClientePorEmail(email);
      if(this.cliente == null)
      {
        this.router.navigateByUrl('/login');
        return [];
      }
      return this.cliente.compras;
    }
    return [];
  }

}
