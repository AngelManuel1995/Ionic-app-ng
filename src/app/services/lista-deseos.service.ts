import { Injectable } from "@angular/core";
import { Lista }      from '../classes/listas';

@Injectable()

export class ListaDeseosService{

    lists:Lista[] = [];

    constructor(){

       /* let lista1 = new Lista('Compras del super mercado');
        let lista2 = new Lista('Juegos que deseo');
        let lista3 = new Lista('Cosas de la universidad');
        this.lista.push(lista1);
        this.lista.push(lista2);
        this.lista.push(lista3);*/

        this.loadData();
        console.log('Servicio Inicializado');

    }

    updateData(){
        localStorage.setItem("data", JSON.stringify(this.lists));
    }

    loadData(){
        if(localStorage.getItem("data")){
            this.lists =  JSON.parse(localStorage.getItem("data"));
        }
    }

    addList(list:Lista){
        this.lists.push(list);
        this.updateData();
        
    }
}