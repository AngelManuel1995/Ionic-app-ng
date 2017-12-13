import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { PendientesComponent } from "../pages/pendientes/pendientes.component";
import { TerminadosComponent } from '../pages/terminados/terminados.component';
import { ListaDeseosService }  from './services/lista-deseos.service';
import { ReviewComponent }     from "../pages/review/review.component";
import { AddComponent }        from '../pages/add/add.component';
import { ReviewService }       from './services/review.service';
import { PlaceHolderPipe }     from './pipes/placeholder.pipe';
import { DetailComponent }     from '../pages/detail/detail.component';
import { PendientesPipe }      from '../app/pipes/pendientes.pipe';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    ReviewComponent,
    AddComponent,
    PlaceHolderPipe,
    PendientesPipe,
    DetailComponent,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    PendientesComponent,
    TerminadosComponent,
    ReviewComponent,
    AddComponent,
    DetailComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ListaDeseosService,
    ReviewService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
