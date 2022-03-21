import { Juego } from "./juego.model";
import { Cliente } from "./usuario.model";

export class Compra
{
    private _id: number;
    private _cliente: Cliente;
    private _fechaTimestamp: string;
    private _total: number;
    private _juego: Juego;
    
    constructor(id:number, cliente:Cliente, fechaTimestamp: string, total?:number, juego?:Juego)
    {
        this.id = id;
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
    public get fechaTimestamp(): string {
        return this._fechaTimestamp;
    }
    public set fechaTimestamp(value: string) {
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
        //Si se necesita clacular impuestos, descuentos, etc, aqui.

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