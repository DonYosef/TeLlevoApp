import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, delay } from 'rxjs';
import { UsuarioLogeado } from './../modelos/usuarioLogeado';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //Obersevador del cargando
  private cargando: BehaviorSubject<boolean> =
  new BehaviorSubject<boolean>(false);
  //Observador público
  public $cargando =  this.cargando.asObservable();
  //Obersevador del usuarioLogeado
  private usuarioActivo: BehaviorSubject<UsuarioLogeado | null> =
  new BehaviorSubject<UsuarioLogeado | null>(null);
  //Observador público
  public $usuarioActivo = this.usuarioActivo.asObservable();
  //URL del backend
  private readonly URL_LOGIN = "https://dummyjson.com/auth/login";
  constructor(
    private http: HttpClient,
    private router: Router
  ) {

  }

  public intentarLogear(usuario: string, password: string ){
    this.cargando.next(true);
    this.http.post<UsuarioLogeado>(this.URL_LOGIN, JSON.stringify({
      username: usuario,
      password: password
    }),
    {
      headers: {
        "Content-Type": "application/json"
      }
    }
    )
    .pipe(delay(2000))
    .subscribe( resultado => {
      this.usuarioActivo.next(resultado);
      this.cargando.next(false);
      this.router.navigate(['menu']);
    });
  }
}
