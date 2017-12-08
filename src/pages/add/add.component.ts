import { Component, OnInit } from "@angular/core";
import { AlertController, NavController } from "ionic-angular";
import { Item, Lista } from "../../app/classes/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";


@Component({
    selector:"app-add",
    templateUrl:"./add.component.html"
})

export class AddComponent implements OnInit{

    
    listName:string="";
    itemName:string="";

    items:Item[] = [];
    
    constructor( public _alertController:AlertController,
                 public _navController:NavController,
                 public _listaDeseosService:ListaDeseosService){


    }

    ngOnInit(){
        
    }

    addList(){
        if(this.itemName.length == 0){
            return;
        }

        let item = new Item();
        item.nombre = this.itemName;
        this.items.push(item);
        this.itemName = "";

    }

    deleteItem( idx ){
        //Javascript function that permits to remove an element from an array
        this.items.splice( idx, 1);
    }


    saveList(){
        if (this.listName.length == 0){
            let alert = this._alertController.create({
                title: 'Error!',
                subTitle: 'La lista debe tener un nombre!!',
                buttons: ['OK']
                });
            alert.present();
            return;
        }
        let list = new Lista(this.listName);
        list.items = this.items;
        this._listaDeseosService.lista.push(list);
        this._navController.pop();
    }


}