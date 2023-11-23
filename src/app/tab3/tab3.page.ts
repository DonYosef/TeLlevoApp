import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from './../modelos/usuarioLogeado';
import { ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page implements ViewWillEnter, ViewDidLeave{

  constructor( ) {}
  ionViewDidLeave(): void {
    throw new Error('Method not implemented.');
  }
  ionViewWillEnter(): void {
    throw new Error('Method not implemented.');
  }


}
