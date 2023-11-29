import { Storage } from '@ionic/storage-angular';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicio/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage implements OnInit{

  sesion: any;
  sesion2: any;
  sesion3: any;

  constructor( private auth : AuthService,
    private storage: Storage) {
  }

  public cerrarSesion(){
    this.auth.cerrarSesion();
  }


  ngOnInit() {
    this.storage.get('nombreUsuario').then((val) => {
      this.sesion = val
    });
      this.storage.get('apellidoUsuario').then((val2) => {
       this.sesion2 = val2
      }) ;
    this.storage.get('email').then((val3) => {
      this.sesion3 = val3
    });

  }

}
