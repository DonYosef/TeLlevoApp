import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from './../servicio/auth.service';
//         Servicio    Clase
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public formularioLogin: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    public auth: AuthService
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
      alert("formulario invalido");
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

  ngOnInit() {
  }

}
