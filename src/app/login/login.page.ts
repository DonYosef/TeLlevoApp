import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import { AuthService } from './../servicio/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage  {



  public formularioLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private storage: Storage,
    private auth: AuthService
  ) {
    this.formularioLogin = formBuilder.group({
      usuario: ['',
                [Validators.required,
                  Validators.minLength(3),
                    Validators.maxLength(15)]   ],
      password: ['',
                  [Validators.required,
                    Validators.minLength(3),
                      Validators.maxLength(15)] ]
    })
  }

  public intentarLogear(){
    if(!this.formularioLogin.valid){
      alert("Datos incorrectos, vuelva a intentarlo");
      this.formularioLogin.controls['usuario'].setValue("");
      this.formularioLogin.controls['password'].setValue("");
      this.formularioLogin.clearValidators();
      return
    }
    this.auth.intentarLogear(
      this.formularioLogin.controls['usuario'].value,
      this.formularioLogin.controls['password'].value
    )
  }

}
