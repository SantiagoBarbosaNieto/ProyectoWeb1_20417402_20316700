import { Juego } from "./juego.model";

export class Tienda
{
    private _nombre: string;
    private _id: number;
    private _juegos: Juego[];


    constructor(nombre: string, id:number)
    {
        this.nombre = nombre;
        this.id = id;
    }

    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get juegos(): Juego[] {
        return this._juegos;
    }
    public set juegos(value: Juego[]) {
        this._juegos = value;
    }

    public agregarJuego(juego: Juego) : void
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

    public modificarJuego(juego : Juego)
    {
        const cond = (juego:Juego) => juego.id == juego.id;
        let i = this.juegos.findIndex(cond);
        if(i > -1)
            this.juegos.splice(i,1,juego);
        else
            this.agregarJuego(juego);
    }
}