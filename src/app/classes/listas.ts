import { Item } from './item';

export class Lista{
    nombre:string;
    terminada:boolean;
    items:Item[];

    constructor( nombre:string ){
        this.nombre = nombre;
        this.terminada = false;
    }
}

