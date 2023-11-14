import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../servicio/auth.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})


export class TabsPage implements OnInit{

  mensaje: string = "";

  constructor( private auth : AuthService) {
  }

  public cerrarSesion(){
    this.auth.cerrarSesion();
  }

  public sesion = sessionStorage.getItem('nombreUsuario');
  public sesion2 = sessionStorage.getItem('apellidoUsuario');
  public sesion3 = sessionStorage.getItem('email');

  ngOnInit() {
  }

}