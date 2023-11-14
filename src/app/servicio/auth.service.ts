import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay } from 'rxjs';
import { UsuarioLogeado } from './../modelos/usuarioLogeado';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

    public listaLocal: UsuarioLogeado[] = [];
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
    private router: Router
  ) {

  }

async intentarLogear(usuario: string, password: string ){
  for(let i = 0; i < localStorage.length; i++){
    this.listaLocal.push(JSON.parse(localStorage.getItem('usuario'+i) || '{}'));
    let usuarioEncontrado2 = this.listaLocal.forEach( u => u.email == usuario && u.password == password);
    console.log(usuarioEncontrado2)
  };

    const usuarioEncontrado = this.usuariosBase.find( u => u.email == usuario && u.password == password);
    
    if(usuarioEncontrado){
            sessionStorage.setItem('nombreUsuario', usuarioEncontrado.nombre);
            sessionStorage.setItem('apellidoUsuario', usuarioEncontrado.apellido);
            sessionStorage.setItem('email', usuarioEncontrado.email);
            this.router.navigate(['tabs'])

    // }else if(usuarioEncontrado2){
    //     console.log(this.usuarioEncontrado2)
    //     // sessionStorage.setItem('nombreUsuario', this.usuarioEncontrado2.usuario);
    //     // sessionStorage.setItem('apellidoUsuario', this.usuarioEncontrado2.apellido);
    //     // sessionStorage.setItem('email', this.usuarioEncontrado2.email);
    //     // this.router.navigate(['tabs'])
    }
    else{
            alert("Usuario no encontrado") 

    }
}



public cerrarSesion(){
    sessionStorage.removeItem('nombreUsuario');
    sessionStorage.removeItem('apellidoUsuario');
    sessionStorage.removeItem('email');
    this.router.navigate(['/login'])
}


}


//     this.cargando.next(true)
//     this.http.post<UsuarioLogeado>(this.URL_LOGIN, JSON.stringify({
//       username: usuario,
//       password: password
//     }),
//     {
//       headers: {
//         "Content-Type": "application/json"
//       }
//     }
//     )
//     .pipe(delay(2000))
//     .subscribe( resultado => {
//       this.usuarioActivo.next(resultado);
//       this.cargando.next(false);
//       this.router.navigate(['tabs'])

//     });
//   }