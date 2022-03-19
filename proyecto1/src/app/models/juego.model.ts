export class Juego
{
    private id: number;
    private precio: number;
    private nombre: string;
    private nombreEstudio: string;
    private descripcion: string;
    private dirImgPreviw: string

    constructor(id: number, precio: number, nombre: string, nombreEstudio: string, descripcion: string, dirImgPreviw: string)
    {
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
        this.nombreEstudio = nombreEstudio;
        this.descripcion = descripcion;
        this.dirImgPreviw = dirImgPreviw;
    }

    public getId(): number
    {
        return this.id;
    }
    public setId(id:number): void
    {
        this.id = id;
    }
    public getPrecio(): number
    {
        return this.precio;
    }
    public setPrecio(precio:number): void
    {
        this.precio = precio;
    }
    public getNombre():string
    {
        return this.nombre;
    } 
    public setNombre(nombre:string): void
    {
        this.nombre = nombre;
    }
    public getNombreEstudio():string
    {
        return this.nombre;
    } 
    public setNombreEstudio(nombre:string): void
    {
        this.nombre = nombre;
    }
}