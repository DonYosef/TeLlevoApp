import { Injectable, OnInit } from '@angular/core';
import { UsuarioLogeado } from './../modelos/usuarioLogeado';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

    public usuarioEncontrado2: UsuarioLogeado[] = [];
    public usuarioEncountered: UsuarioLogeado[] = [];
    public usuariosBase: UsuarioLogeado[] = [
        {
            "nombre": "José",
            "apellido": "Muñoz",
            "telefono": "666",
            "email": "jose@gmail.com",
            "password": "abc123"
          },
          {
            "nombre": "Jaime",
            "apellido": "Aravena",
            "telefono": "777",
            "email": "jaime@gmail.com",
            "password": "abc123"
          },
          {
            "nombre": "Juan",
            "apellido": "Perez",
            "telefono": "888",
            "email": "juan@gmail.com",
            "password": "abc123"
          }
    ];

  constructor(
    private router: Router,
    public alertController: AlertController,
    private storage: Storage
  ) {

  }

  async ngOnInit() {
  }


  //
  // let value = await this.storage.get('usuarios');
  // console.log(value);


  async intentarLogear(usuario: string, password: string){
    let usuarioEncountered = this.usuariosBase.find( u => u.email == usuario && u.password == password);

    await this.storage.create();

    this.usuarioEncontrado2 =  JSON.parse(await this.storage.get('usuarios') || '[]');
    let usuarioEncontrado = this.usuarioEncontrado2.find( u => u.email == usuario && u.password == password);

    if(usuarioEncontrado){
        sessionStorage.setItem('nombreUsuario', usuarioEncontrado.nombre);
        sessionStorage.setItem('apellidoUsuario', usuarioEncontrado.apellido);
        sessionStorage.setItem('email', usuarioEncontrado.email);
        this.router.navigate(['tabs'])
    }else if(usuarioEncountered){
              sessionStorage.setItem('nombreUsuario', usuarioEncountered.nombre);
              sessionStorage.setItem('apellidoUsuario', usuarioEncountered.apellido);
              sessionStorage.setItem('email', usuarioEncountered.email);
              this.router.navigate(['tabs'])
    }else{
      const alert = await this.alertController.create({
        header: 'Ingreso denegado',
        message: 'Correo/contraseña incorrectos, vuelva a intentarlo',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
}

public cerrarSesion(){
    sessionStorage.removeItem('nombreUsuario');
    sessionStorage.removeItem('apellidoUsuario');
    sessionStorage.removeItem('email');
    this.router.navigate(['/login'])
}

}
