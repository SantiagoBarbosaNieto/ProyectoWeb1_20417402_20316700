import { Juego } from "./juego.model";
import { Cliente } from "./usuario.model";

export class Compra
{
    private id: number;
    private cliente: Cliente;
    private fechaTimestamp: string;
    private total: number;
    private juegos: Juego[];
    
    constructor(id:number, cliente:Cliente, fechaTimestamp: string, total?:number, juegos?:Juego[])
    {
        this.id = id;
        this.cliente = cliente;
        this.fechaTimestamp = fechaTimestamp;
        this.total = total ?? 0;
        this.juegos = juegos ?? [];
    }

    public getId():number
    {
        return this.id;
    }
    
    public setId(id:number):void
    {
        this.id = id;
    }

    public getCliente():Cliente
    {
        return this.cliente;
    }

    public setCliente(cliente:Cliente):void
    {
        this.cliente = cliente;
    }

    public getFechaTimestamp():string 
    {
        return this.fechaTimestamp;
    }

    public setFechaTimestamp(fechaTimestamp:string):void
    {
        this.fechaTimestamp = fechaTimestamp;
    }

    public getTotal():number
    {
        return this.total;
    }

    public setTotal(total: number):void
    {
        this.total = total;
    }

    public calcularTotal():void
    {
        let tot = 0;
        this.juegos.forEach(juego => {
            tot += juego.getPrecio();
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
        const cond = (juego:Juego) => juego.getId() == id;
        let i = this.juegos.findIndex(cond);
        if(i > -1)
            this.juegos.splice(i,1)
        //else
            //Mensaje de no encontrado o algo así
    }

    public buscarJuegoPorID(id: number) : Juego
    {
        const cond = (juego:Juego) => juego.getId() == id;
        let i = this.juegos.findIndex(cond);
        if(i > -1)
            return this.juegos[i];
        else
            return null;
    }


}