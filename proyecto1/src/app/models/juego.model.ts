export class Juego
{
    private _id: number;
    private _precio: number;
    private _nombre: string;
    private _nombreEstudio: string;
    private _descripcion: string;
    private _dirImgPreviw: string;

    constructor(id: number, precio: number, nombre: string, nombreEstudio: string, descripcion: string, dirImgPreviw: string)
    {
        this.id = id;
        this.precio = precio;
        this.nombre = nombre;
        this.nombreEstudio = nombreEstudio;
        this.descripcion = descripcion;
        this.dirImgPreviw = dirImgPreviw;
    }

    
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get precio(): number {
        return this._precio;
    }
    public set precio(value: number) {
        this._precio = value;
    }
    public get nombre(): string {
        return this._nombre;
    }
    public set nombre(value: string) {
        this._nombre = value;
    }
    public get nombreEstudio(): string {
        return this._nombreEstudio;
    }
    public set nombreEstudio(value: string) {
        this._nombreEstudio = value;
    }
    public get descripcion(): string {
        return this._descripcion;
    }
    public set descripcion(value: string) {
        this._descripcion = value;
    }
    public get dirImgPreviw(): string {
        return this._dirImgPreviw;
    }
    public set dirImgPreviw(value: string) {
        this._dirImgPreviw = value;
    }
}