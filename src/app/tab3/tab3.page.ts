import { Component, OnInit } from '@angular/core';
import { UsuarioLogeado } from './../modelos/usuarioLogeado';
import { AuthService } from '../servicio/auth.service';
import { ViewWillEnter, ViewDidLeave } from '@ionic/angular';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})


export class Tab3Page implements ViewWillEnter, ViewDidLeave{

  constructor(
    private auth : AuthService,
   ) {}
  ionViewDidLeave(): void {
    throw new Error('Method not implemented.');
  }
  ionViewWillEnter(): void {
    throw new Error('Method not implemented.');
  }

  public MostrarUsuario = sessionStorage.getItem('nombreUsuario');
  public MostrarSegundoN = sessionStorage.getItem('apellidoUsuario');
  public MostrarEmail = sessionStorage.getItem('email');
  public MostrarTelefono = sessionStorage.getItem('telefono');
}
