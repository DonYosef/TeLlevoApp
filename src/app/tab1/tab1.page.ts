import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
   public contador: number = 0;
  constructor() {}

  botonClick() {
    this.contador++;
    return this.contador;
  }
  limpiarCampos() {
    (<HTMLInputElement>document.getElementById('destino')).value = '';
    (<HTMLInputElement>document.getElementById('capacidad')).value = '';
    (<HTMLInputElement>document.getElementById('tarifa')).value = '';
  }
}