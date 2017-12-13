import { Component, OnInit }    from '@angular/core';
import { ListaDeseosService }   from '../../app/services/lista-deseos.service';
import { NavController }        from "ionic-angular";
import { DetailComponent }      from '../detail/detail.component';

@Component({
    selector:'app-terminado',
    templateUrl:'./terminados.component.html'
})

export class TerminadosComponent implements OnInit{

    constructor( private _listaDeseosService:ListaDeseosService,
        private _navController:NavController ){

}

    ngOnInit(){

    }

    showDetail(lista, idx){
    this._navController.push( DetailComponent, { lista, idx });
    }
}