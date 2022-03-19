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
        throw new Error("Method not implemented.");
    }
    public setNombre(nombre: string): void {
        throw new Error("Method not implemented.");
    }
    public getApellido(): string {
        throw new Error("Method not implemented.");
    }
    public setApellido(apellido: string): void {
        throw new Error("Method not implemented.");
    }
    public getCedula(): number {
        throw new Error("Method not implemented.");
    }
    public setCedula(cedula: number): void {
        throw new Error("Method not implemented.");
    }
    public getEmail(): string {
        throw new Error("Method not implemented.");
    }
    public setEmail(email: string): void {
        throw new Error("Method not implemented.");
    }
    public getContraseña(): string {
        throw new Error("Method not implemented.");
    }
    public setContraseña(contraseña: string): void {
        throw new Error("Method not implemented.");
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
    constructor(nombre:string, apellido:string, cedula:number, email:string, contraseña:string)
    {
        super(nombre, apellido, cedula, email, contraseña);
    }
    
    //TODO: Métodos únicos de cliente
}