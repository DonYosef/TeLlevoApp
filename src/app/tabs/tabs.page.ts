import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from './../modelos/usuarioLogeado';
import { AuthService } from './../servicio/auth.service';
import { ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage implements ViewWillEnter, ViewDidLeave{

  public usuarioActivo: UsuarioLogeado | null = null;
  private suscripcion: Subscription | null = null;
  constructor(
    private auth: AuthService
  ) {}

  ionViewDidLeave(): void {
    this.suscripcion?.unsubscribe();
  }

  ionViewWillEnter(): void {
      this.suscripcion =  this.auth.$usuarioActivo.subscribe( usuario => {
      this.usuarioActivo = usuario;
    })
  }

}
