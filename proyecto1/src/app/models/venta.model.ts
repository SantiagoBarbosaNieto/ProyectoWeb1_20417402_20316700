import { Juego } from "./juego.model";
import { Administrador } from "./usuario.model";

export class Venta
{
    public static idCount: number = 0;
    private _id: number;
    private _admin: Administrador;
    private _fechaTimestamp: number;
    private _juego: Juego;

    constructor( admin:Administrador, fechaTimestamp: number,juego?:Juego)
    {
        Venta.idCount++;
        this._id = Venta.idCount;
        this._admin = admin;
        this._fechaTimestamp = fechaTimestamp;
        this._juego = juego ?? null;
    }

    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get admin(): Administrador {
        return this._admin;
    }
    public set admin(value: Administrador) {
        this._admin = value;
    }
    public get fechaTimestamp(): number {
        return this._fechaTimestamp;
    }
    public set fechaTimestamp(value: number) {
        this._fechaTimestamp = value;
    }
    public get juego(): Juego {
        return this._juego;
    }
    public set juego(value: Juego) {
        this._juego = value;
    }
    public getJuego():Juego
    {
        return this.juego;
    }

    public setJuego(juego: Juego):void
    {
        this.juego = juego;
    }

    public getFechaString():string
    {
        let a = new Date(this.fechaTimestamp);
        let months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
        let year = a.getFullYear();
        let month = months[a.getMonth()];
        let date = a.getDate();
        let hour = a.getHours();
        let min = a.getMinutes();
        let sec = a.getSeconds();
        let time = date + '/' + month + '/' + year + '/' + hour + ':' + min + ':' + sec ;
        return time;
    }
    
}