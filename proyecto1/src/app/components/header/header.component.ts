import { Component, OnInit } from '@angular/core';
import { Router, Event, NavigationStart, NavigationEnd, NavigationError } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public mostrarLogin:boolean = false;
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
    if(localStorage.getItem('nombre')== null)
      this.mostrarLogin = true;
  }

  public actualizar()
  {
    if(localStorage.getItem('rol') == null || localStorage.getItem('rol') == 'visitante')
      this.mostrarLogin = true;
    else
      this.mostrarLogin = false;
    
  }
  public getNombreLogged():string
  {
    return "Hola " + localStorage.getItem('nombre') + "!";
  }

  public irALogin()
  {
    this.router.navigateByUrl('/login')
  }

  public logout()
  {
    localStorage.clear();
    this.actualizar();
  }
}
