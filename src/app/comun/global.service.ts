import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Usuario } from '../auth/interfaces/perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  public usuario = new BehaviorSubject<Usuario>({
    "id_usuario":0,
    "nombre":"",
    "apellidos":"",
    'email':'',
    "fecha_alta":new Date(),
    "clave":'',
    "fecha_baja":new Date(),
    "ultimo_acceso":new Date()
  });

  constructor() { }
}
