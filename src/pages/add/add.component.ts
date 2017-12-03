import { Component, OnInit } from "@angular/core";
import { Item, Lista } from "../../app/classes/index";

@Component({
    selector:"app-add",
    templateUrl:"./add.component.html"
})

export class AddComponent implements OnInit{

    
    listName:string;
    itemName:string="";

    items:Item[] = [];
    
    constructor(){


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

}