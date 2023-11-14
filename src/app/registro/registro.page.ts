import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { usuarioRegistrado } from '../modelos/usuarioRegistrado';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public usuario: usuarioRegistrado[] = [];
  public formularioRegistro: FormGroup;
  public contador = localStorage.length+1;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    public alertController: AlertController,

    ) { 
    this.formularioRegistro = formBuilder.group({
      primerNombre: ['',
                [Validators.required,
                  Validators.minLength(3),
                    Validators.maxLength(15)]   ],
      primerApellido: ['',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)]
      ],
      telefono: ['',
        [Validators.minLength(3),
          Validators.maxLength(15)]
      ],
      email: ['',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)]
      ],
      password: ['',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(15)]
      ]
    });
  }

  ngOnInit() {
  }

  async registrar(){
    var f = this.formularioRegistro.value;
    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Registro fallido',
        message: 'Datos incorrectos, vuelva a intentarlo',
        buttons: ['OK']
      });
      await alert.present();
      return;
    }
    this.usuario = [{
      nombre: f.primerNombre,
      apellido: f.primerApellido,
      telefono: f.telefono,
      email: f.email,
      password: f.password
      }]
    localStorage.setItem('usuario'+this.contador, JSON.stringify(this.usuario));
    this.formularioRegistro.controls['primerNombre'].setValue("");
    this.formularioRegistro.controls['primerApellido'].setValue("");
    this.formularioRegistro.controls['telefono'].setValue("");
    this.formularioRegistro.controls['email'].setValue("");
    this.formularioRegistro.controls['password'].setValue("");
    this.formularioRegistro.clearValidators();
    this.contador++;
    this.router.navigate(['/login']);

  }

}
