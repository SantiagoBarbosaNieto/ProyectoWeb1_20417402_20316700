import { Injectable } from '@angular/core';
import { Administrador, Cliente, Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public listaAdmins: Administrador[] = [];
  public listaClientes: Cliente[] = [];
  constructor() { }

  public agregarAdmin(nombre: string, apellido:string, cedula:number, email:string, contraseña:string):void 
  {
    this.listaAdmins.push(new Administrador(nombre, apellido, cedula, email, contraseña));
  }

  public agregarCliente(nombre: string, apellido:string, cedula:number, email:string, contraseña:string):void 
  {
    this.listaClientes.push(new Cliente(nombre, apellido, cedula, email, contraseña));
  }

  eliminarUsuario(cedula:number) //Sirtve buscar en ambas al tiempo por que no se podrá tener una cuenta cliente y admin con la misma cédula
  {
    const condC = (cliente:Cliente) => cliente.getCedula() == cedula;
    let i = this.listaClientes.findIndex(condC);
    if(i > -1)
      this.listaClientes.splice(i,1) 

    const condA = (admin:Administrador) => admin.getCedula() == cedula;
    i = this.listaAdmins.findIndex(condA);
    if(i > -1)
      this.listaAdmins.splice(i,1) 
  }

  buscarUsuario(cedula: number): Usuario
  {
    const condC = (cliente:Cliente) => cliente.getCedula() == cedula;
    let c = this.listaClientes.find(condC);
    if(c != null)
      return c;
    else
    {
      const condA = (admin:Administrador) => admin.getCedula() == cedula;
      let a = this.listaAdmins.find(condA);
      if(a != null)
        return a;
      else
        return null;
    }
  }

  buscarUsuarioPorEmail(email: string): Usuario
  {
    const condC = (cliente:Cliente) => cliente.getEmail() == email;
    let c = this.listaClientes.find(condC);
    if(c != null)
      return c;
    else
    {
      const condA = (admin:Administrador) => admin.getEmail() == email;
      let a = this.listaAdmins.find(condA);
      if(a != null)
        return a;
      else
        return null;
    }
  }
}
