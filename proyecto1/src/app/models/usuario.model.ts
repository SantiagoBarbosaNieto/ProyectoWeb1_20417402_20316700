import { Compra } from "./compra.model";

export abstract class Usuario
{
    private _nombre: string;
    private _apellido: string;
    private _cedula: number;
    private _email: string;
    private _contraseña: string;

    constructor(nombre:string, apellido:string, cedula:number, email:string, contraseña:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.email = email;
        this.contraseña = contraseña;
    }
    
    
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get apellido(): string {
        return this._apellido;
    }
    public set apellido(value: string) {
        this._apellido = value;
    }
    public get cedula(): number {
        return this._cedula;
    }
    public set cedula(value: number) {
        this._cedula = value;
    }
    public get email(): string {
        return this._email;
    }
    public set email(value: string) {
        this._email = value;
    }
    public get contraseña(): string {
        return this._contraseña;
    }
    public set contraseña(value: string) {
        this._contraseña = value;
    }
    
}

export class Administrador extends Usuario
{
    constructor(nombre:string, apellido:string, cedula:number, email:string, contraseña:string)
    {
        super(nombre, apellido, cedula, email, contraseña);
    }
    
    //TODO: Métodos únicos de admin, no creo que tenga xd sólo es para ser identificado como admin con instanceOf
}


export class Cliente extends Usuario
{
    private compras: Compra[];
    constructor(nombre:string, apellido:string, cedula:number, email:string, contraseña:string, compras?:Compra[])
    {
        super(nombre, apellido, cedula, email, contraseña);
        this.compras = compras ?? [];
    }
    
    public getCompras():Compra[]
    {
        return this.compras;
    }

    public setCompras(compras: Compra[]):void
    {
        this.compras = compras;
    }

    public agregarCompra(compra:Compra):void
    {
        this.compras.push(compra);
    }

    public eliminarCompra(id: number) : void
    {
        const cond = (compra:Compra) => compra.id == id;
        let i = this.compras.findIndex(cond);
        if(i > -1)
            this.compras.splice(i,1)
        //else
            //Mensaje de no encontrado o algo así
    }

    public buscarCompraPorID(id: number) : Compra
    {
        const cond = (compra:Compra) => compra.id == id;
        let i = this.compras.findIndex(cond);
        if(i > -1)
            return this.compras[i];
        else
            return null;
    }

    public buscarCompraPorJuegoId(idJuego: number) : Compra
    {
        const cond = (compra:Compra) => compra.buscarJuegoPorID(idJuego) !=  null;
        let i = this.compras.findIndex(cond);
        if(i > -1)
            return this.compras[i];
        else
            return null;
    }
}