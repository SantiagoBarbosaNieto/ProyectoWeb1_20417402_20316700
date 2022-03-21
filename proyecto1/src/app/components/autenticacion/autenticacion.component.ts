import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Administrador, Cliente } from 'src/app/models/usuario.model';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-autenticacion',
  templateUrl: './autenticacion.component.html',
  styleUrls: ['./autenticacion.component.css']
})
export class AutenticacionComponent implements OnInit {

  constructor(public _usuarioService:UsuariosService, private router: Router) { }

  public auxL:AuxLogin = new AuxLogin();
  public auxS:AuxSignup = new AuxSignup();
  public mySwitch:boolean = true;

  ngOnInit(): void {
    localStorage.setItem("rol", "visitante");
  }

  private checksSignup():boolean
  {
    if(this.auxS.nombre == undefined || this.auxS.nombre == '')
    {
      alert("Debe ingresar un nombre");
      return false;
    }
    if(this.auxS.apellido == undefined || this.auxS.apellido == '')
    {
      alert("Debe ingresar un apellido");
      return false;
    }
    if(this.auxS.email == undefined || this.auxS.email == '')
    {
      alert("Debe ingresar un email");
      return false;
    }
    if(this.auxS.cedula == undefined || this.auxS.cedula == '')
    {
      alert("Debe ingresar una cedula");
      return false;
    }
    if(isNaN(Number(this.auxS.cedula)))
    {
      alert("Debe ingresar una cedula válida (únicamente números)");
      return false;
    }

    if(this.auxS.password == undefined || this.auxS.password == "")
    {
      alert("Debe ingresar una contraseña");
      return false;
    }
    if(isNaN(Number(this.auxS.rol)))
    {
      alert("Debe escoger un rol");
      return false;
    }
    if(this._usuarioService.buscarUsuario(Number(this.auxS.cedula)) != null)
    {
      alert("Usuario ya registrado con esta Cedula");
      return false;
    }
    if(this._usuarioService.buscarUsuarioPorEmail(this.auxS.email) != null)
    {
      alert("Usuario ya registrado con este email");
      return false;
    }
    return true;
  }

  public signup()
  {
    
    if(!this.checksSignup())
      return;
    if(this.auxS.rol == 1)
    {
      //Es Cliente
      this._usuarioService.agregarCliente(this.auxS.nombre, this.auxS.apellido, Number(this.auxS.cedula), this.auxS.email, this.auxS.password);
    }
    else if(this.auxS.rol == 2)
    {
      //Es Admin
      this._usuarioService.agregarAdmin(this.auxS.nombre, this.auxS.apellido, Number(this.auxS.cedula), this.auxS.email, this.auxS.password);
    }

  }

  public login()
  {
    if(this.auxL.email == undefined || this.auxL.email == '')
    {
      alert("Debe ingresar un email registrado");
      return;
    }
    else if(this.auxL.password == undefined || this.auxL.password == '')
    {
      alert("Debe ingresar su contraseña");
      return;
    }

    let usuario = this._usuarioService.buscarUsuarioPorEmail(this.auxL.email);
    if(usuario == null)
    {
      alert("Debe ingresar un email registrado");
      return;
    }

    if(usuario.contraseña != this.auxL.password)
    {
      alert("Email o contraseña no correctos");
      return;
    }

    
    localStorage.setItem('nombre',usuario.nombre);
    localStorage.setItem('apellido', usuario.apellido);
    localStorage.setItem('email', usuario.email);
    localStorage.setItem('cedula', usuario.cedula.toString());
    localStorage.setItem('recordarme', 'false'); //Cuando haya backend y esto sirva de algo: this.auxL.recordarme.toString()
    if( usuario instanceof Administrador)
      localStorage.setItem('rol',"administrador");
    if(usuario instanceof Cliente)
      localStorage.setItem('rol',"cliente");
    this.router.navigateByUrl('/tienda');
  }
}

class AuxLogin
{
  constructior(){}
  public email:string;
  public password:string;
  public recordarme:boolean = true;
}

class AuxSignup
{
  constructior(){}
  public nombre:string;
  public apellido:string;
  public email:string;
  public cedula:string;
  public password:string;
  public rol: number;
}
