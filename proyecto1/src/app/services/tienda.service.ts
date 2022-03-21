import { Injectable } from '@angular/core';
import { Juego } from '../models/juego.model';

@Injectable({
  providedIn: 'root'
})
export class TiendaService {

  public _juegos: Juego[] = [];
  constructor() {
    //Test juegos
    let j = new Juego(10.5,"Elden Ring", "Bandai Namco", "Souls-like game", "/assets/elden-ring.jpg");
    this.juegos.push(j);
    j = new Juego(13.5,"Fortnite", "Epic Games", "FPS shooter", "/assets/fortnite.jfif");
    this.juegos.push(j);
   }

  public get juegos(): Juego[] {
    return this._juegos;
  }
  public set juegos(value: Juego[]) {
    this._juegos = value;
  }

  public buscarJuego(id:number):Juego
  {
    const cond = (juego:Juego) => juego.id == id;
    return this.juegos.find(cond);
  }
  
}
