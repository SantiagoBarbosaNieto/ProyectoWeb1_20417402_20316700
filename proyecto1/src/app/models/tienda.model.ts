import { Juego } from "./juego.model";

export class Tienda
{
    private nombre: string;
    private id: number;
    private juegos: Juego[];


    constructor(nombre: string, id:number)
    {
        this.nombre = nombre;
        this.id = id;
    }

    public getNombre(): string
    {
        return this.nombre;
    }

    public setNombre(nombre: string): void
    {
        this.nombre = nombre;
    }

    public getId(): number
    {
        return this.id;
    }

    public setId(id: number): void
    {
        this.id = id;
    }

    public agregarJuego(juego: Juego) : void
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

    public modificarJuego(juego : Juego)
    {
        const cond = (juego:Juego) => juego.getId() == juego.getId();
        let i = this.juegos.findIndex(cond);
        if(i > -1)
            this.juegos.splice(i,1,juego);
        else
            this.agregarJuego(juego);
    }
}