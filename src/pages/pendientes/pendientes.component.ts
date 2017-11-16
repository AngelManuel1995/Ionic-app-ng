import { Component, OnInit } from '@angular/core';

@Component({
    selector:'app-pendientes',
    templateUrl:'./pendientes.component.html'    
})

export class PendientesComponent implements OnInit{
   
    constructor(){

    }

    ngOnInit(){

    }
}

//Componente que manejara las lista de pendientes que tendremos que hacer.
//Pero con Ionic lo debemos llamar en el modulo y pornerlo en dos partes.