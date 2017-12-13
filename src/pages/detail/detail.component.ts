import { Component, OnInit } from "@angular/core";
import { NavController, NavParams, AlertController } from "ionic-angular";
import { Lista, Item } from "../../app/classes/index";
import { ListaDeseosService } from "../../app/services/lista-deseos.service";

@Component({
    selector:"app-detail",
    templateUrl:"./detail.component.html"
})

export class DetailComponent implements OnInit {

    lista:Lista;
    idx:number;

    constructor(
        public _navParams:NavParams,
        public _navController:NavController,
        public _listaDeseosService:ListaDeseosService,
        public _alertController:AlertController
    ){

        this.lista = _navParams.get("lista");
        this.idx = _navParams.get("idx");
    }

    ngOnInit() {
        
    }

    myUpdate(item:Item){
        item.completado = !item.completado;

        let todosMarcados = true;
        for(let item of this.lista.items){
            if(!item.completado){
                todosMarcados = false;
                break;
            }
        }

        this.lista.terminada = todosMarcados;
        
        this._listaDeseosService.updateData();
    }

    deleteList(){
        let confirm = this._alertController.create({
            title: this.lista.nombre,
            message: 'Está seguto que quiere borrar la lista?',
            buttons: ['Cancelar',
              {
                text: 'Eliminar',
                handler: () => {
                  this._listaDeseosService.deleteList(this.idx);
                  this._navController.pop();
                }
              }
            ]
          });
        confirm.present();
    }

}
