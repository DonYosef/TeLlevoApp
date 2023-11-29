import { Injectable } from '@angular/core';
import { Geolocation, Position } from '@capacitor/geolocation';

@Injectable({
  providedIn: 'root'
})
export class GpsService {

  constructor() { }
  public posicionActual: Position | null = null;

  public async obtenerPosicion(){
    const estadoPermiso = await Geolocation.checkPermissions();
    if(estadoPermiso.location == "granted"){
      const coordinates = await Geolocation.getCurrentPosition();
      this.posicionActual = coordinates;
    }
    return null;
  }
  public async permisoGps(){
    await Geolocation.requestPermissions();
    }
}
