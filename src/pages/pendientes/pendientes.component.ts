import { Component, OnInit } from '@angular/core';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';

@Component({
    selector:'app-pendientes',
    templateUrl:'./pendientes.component.html'    
})

export class PendientesComponent implements OnInit{
   
    constructor( private _listaDeseosService:ListaDeseosService ){

    }

    ngOnInit(){

    }
}

//Componente que manejara las lista de pendientes que tendremos que hacer.
//Pero con Ionic lo debemos llamar en el modulo y pornerlo en dos partes.