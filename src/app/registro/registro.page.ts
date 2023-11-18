import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

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
                  Validators.minLength(2),
                    Validators.maxLength(20)]   
      ],
      primerApellido: ['',
        [Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20)]
      ],
      telefono: ['',
        [Validators.minLength(3),
          Validators.maxLength(15)]
      ],
      email: ['',
          [
          Validators.minLength(3),
          Validators.maxLength(25)]
      ],
      password: ['',
        [Validators.required,
          Validators.minLength(3),
          Validators.maxLength(25)]
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

    let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios') || '[]');
    
    let nuevoUsuario = {
      nombre: f.primerNombre,
      apellido: f.primerApellido,
      telefono: f.telefono,
      email: f.email,
      password: f.password
      }

      usuariosGuardados.push(nuevoUsuario);

    localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));

    this.formularioRegistro.controls['primerNombre'].setValue("");
    this.formularioRegistro.controls['primerApellido'].setValue("");
    this.formularioRegistro.controls['telefono'].setValue("");
    this.formularioRegistro.controls['email'].setValue("");
    this.formularioRegistro.controls['password'].setValue("");
    this.formularioRegistro.clearValidators();

    this.router.navigate(['/login']);

  }

}
