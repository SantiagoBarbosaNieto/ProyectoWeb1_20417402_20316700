import { Juego } from "./juego.model";
import { Cliente } from "./usuario.model";

export class Compra
{
    private _id: number;
    private _cliente: Cliente;
    private _fechaTimestamp: string;
    private _total: number;
    private _juegos: Juego[];
    
    constructor(id:number, cliente:Cliente, fechaTimestamp: string, total?:number, juegos?:Juego[])
    {
        this.id = id;
        this.cliente = cliente;
        this.fechaTimestamp = fechaTimestamp;
        this.total = total ?? 0;
        this.juegos = juegos ?? [];
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
    public get juegos(): Juego[] {
        return this._juegos;
    }
    public set juegos(value: Juego[]) {
        this._juegos = value;
    }

    public calcularTotal():void
    {
        let tot = 0;
        this.juegos.forEach(juego => {
            tot += juego.precio;
        } )

        //Si se necesita clacular impuestos, descuentos, etc, aqui.

        this.total = tot;
    }

    public getJuegos():Juego[]
    {
        return this.juegos;
    }

    public setJuegos(juegos: Juego[]):void
    {
        this.juegos = juegos;
    }

    public agregarJuego(juego: Juego):void
    {
        this.juegos.push(juego);
    }

    public eliminarJuego(id: number) : void
    {
        const cond = (juego:Juego) => juego.id == id;
        let i = this.juegos.findIndex(cond);
        if(i > -1)
            this.juegos.splice(i,1)
        //else
            //Mensaje de no encontrado o algo así
    }

    public buscarJuegoPorID(id: number) : Juego
    {
        const cond = (juego:Juego) => juego.id == id;
        let i = this.juegos.findIndex(cond);
        if(i > -1)
            return this.juegos[i];
        else
            return null;
    }


}