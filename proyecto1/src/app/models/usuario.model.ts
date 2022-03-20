import { Compra } from "./compra.model";

abstract class Usuario
{
    protected nombre: string;
    protected apellido: string;
    protected cedula: number;
    protected email: string;
    protected contraseña: string;

    constructor(nombre:string, apellido:string, cedula:number, email:string, contraseña:string)
    {
        this.nombre = nombre;
        this.apellido = apellido;
        this.cedula = cedula;
        this.email = email;
        this.contraseña = contraseña;
    }
    
    public getNombre(): string {
        return this.nombre;
    }
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    public getApellido(): string {
        return this.apellido;
    }
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }
    public getCedula(): number {
        return this.cedula;
    }
    public setCedula(cedula: number): void {
        this.cedula = cedula;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(email: string): void {
        this.email = email;
    }
    public getContraseña(): string {
        return this.contraseña;
    }
    public setContraseña(contraseña: string): void {
        this.contraseña = contraseña;
    }
    
}

export class Administrador extends Usuario
{
    constructor(nombre:string, apellido:string, cedula:number, email:string, contraseña:string)
    {
        super(nombre, apellido, cedula, email, contraseña);
    }
    
    //TODO: Métodos únicos de admin
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
        const cond = (compra:Compra) => compra.getId() == id;
        let i = this.compras.findIndex(cond);
        if(i > -1)
            this.compras.splice(i,1)
        //else
            //Mensaje de no encontrado o algo así
    }

    public buscarCompraPorID(id: number) : Compra
    {
        const cond = (compra:Compra) => compra.getId() == id;
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