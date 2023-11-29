import { Component } from '@angular/core';
import { GpsService } from './../servicio/gps.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements ViewWillEnter {

  constructor(public gps: GpsService) {}
  ionViewWillEnter(): void {
    this.gps.permisoGps().then( () => {
      this.gps.obtenerPosicion();
      });

  }

}
