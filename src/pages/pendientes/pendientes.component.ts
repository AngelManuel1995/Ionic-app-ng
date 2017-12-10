import { Component, OnInit }    from '@angular/core';
import { ListaDeseosService }   from '../../app/services/lista-deseos.service';
import { NavController }        from "ionic-angular";
import { AddComponent }         from "../add/add.component";
import { DetailComponent }      from '../detail/detail.component';

@Component({
    selector:'app-pendientes',
    templateUrl:'./pendientes.component.html'    
})

export class PendientesComponent implements OnInit{
   
    constructor( private _listaDeseosService:ListaDeseosService,
                 private _navController:NavController ){

    }

    ngOnInit(){

    }

    goToAdd(){
        this._navController.push(AddComponent);
    }

    showDetail(lista, idx){
        this._navController.push( DetailComponent, { lista, idx });
    }
}

//Componente que manejara las lista de pendientes que tendremos que hacer.
//Pero con Ionic lo debemos llamar en el modulo y pornerlo en dos partes.