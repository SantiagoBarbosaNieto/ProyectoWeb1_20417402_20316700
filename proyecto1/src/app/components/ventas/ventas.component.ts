import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';
import { Administrador } from 'src/app/models/usuario.model';
import { Venta } from 'src/app/models/venta.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

public admin:Administrador = null;
  constructor(private router:Router,public _usuariosService:UsuariosService)
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

  public getVentas():Venta[]
  {
    let email = localStorage.getItem('email');
    if(email != null || email != "")
    {
      this.admin = this._usuariosService.buscarAdminPorEmail(email);
      if(this.admin == null)
      {
        this.router.navigateByUrl('/login');
        return [];
      }
      return this.admin.ventas;
    }
    return[];
  }

}
