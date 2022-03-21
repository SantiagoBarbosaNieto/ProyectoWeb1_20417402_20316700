import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public esCliente:boolean = false;
  public esAdmin: boolean = false;
  public esVisitante: boolean = true;
  constructor( private router: Router) { 
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
    if(localStorage.getItem('recordarme')=='false')
      localStorage.clear();
    if(localStorage.getItem('rol')== null || localStorage.getItem('rol')=='visitante')
    {
      this.esVisitante = true;
      this.esAdmin= false;
      this.esCliente = false;
    }  
  }

  public actualizar()
  {
    if(localStorage.getItem('rol') == null || localStorage.getItem('rol') == 'visitante')
    {
      this.esVisitante = true;
      this.esCliente = false;
      this.esAdmin = false;
    }
    else if(localStorage.getItem('rol') == 'administrador') 
    {
      this.esCliente = false;
      this.esVisitante = false;
      this.esAdmin = true;
    }
    else if(localStorage.getItem('rol') == 'cliente') 
    {
      this.esCliente = true;
      this.esVisitante = false;
      this.esAdmin = false;
    }
    
  }
  public getNombreLogged():string
  {
    return "Hola " + localStorage.getItem('nombre') + "!";
  }

  public irALogin()
  {
    this.router.navigateByUrl('/login');
  }

  public logout()
  {
    localStorage.clear();
    this.actualizar();
    this.router.navigateByUrl('/login')
  }
}
