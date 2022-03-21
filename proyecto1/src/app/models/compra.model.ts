import { Juego } from "./juego.model";
import { Cliente } from "./usuario.model";

export class Compra
{
    public static idCount: number = 0;
    private _id: number;
    private _cliente: Cliente;
    private _fechaTimestamp: number;
    private _total: number;
    private _juego: Juego;
    
    constructor( cliente:Cliente, fechaTimestamp: number, total?:number, juego?:Juego)
    {
        Compra.idCount++;
        this.id = Compra.idCount;
        this.cliente = cliente;
        this.fechaTimestamp = fechaTimestamp;
        this.total = total ?? 0;
        this.juego = juego ?? null;
    }

    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get cliente(): Cliente {
        return this._cliente;
    }
    public set cliente(value: Cliente) {
        this._cliente = value;
    }
    public get fechaTimestamp(): number {
        return this._fechaTimestamp;
    }
    public set fechaTimestamp(value: number) {
        this._fechaTimestamp = value;
    }
    public get total(): number {
        return this._total;
    }
    public set total(value: number) {
        this._total = value;
    }
    public get juego(): Juego {
        return this._juego;
    }
    public set juego(value: Juego) {
        this._juego = value;
    }

    public calcularTotal():void
    {
        this.total = this.juego.precio;
    }

    public getJuego():Juego
    {
        return this.juego;
    }

    public setJuego(juego: Juego):void
    {
        this.juego = juego;
    }

}