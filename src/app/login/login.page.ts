import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../servicio/auth.service';
import { AlertController } from '@ionic/angular';

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
    private auth: AuthService,
    public alertController: AlertController
  ) {
    this.formularioLogin = formBuilder.group({
      usuario: ['',
                [Validators.required,
                  Validators.email,
                  Validators.minLength(2),
                    Validators.maxLength(25)]   ],
      password: ['',
                  [Validators.required,
                    Validators.minLength(2),
                      Validators.maxLength(25)] ]
    })
  }

   async intentarLogear(){
    if(this.formularioLogin.invalid){
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Debe ingresar un correo y una contraseña válidos',
        buttons: ['OK']
      });
      await alert.present();
      return;
  }
    this.auth.intentarLogear(
      this.formularioLogin.controls['usuario'].value,
      this.formularioLogin.controls['password'].value
    )
  }

}