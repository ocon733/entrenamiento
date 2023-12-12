import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Usuario } from '../interfaces/perfil.interface';
import { Constantes } from '../../comun/constantes';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  constructor(private http: HttpClient) { 
  }

  getUsuarios(): Observable<Usuario[]>{
    return this.http.get<Usuario[]> ( Constantes.SERVER_API + "usuarios");
  }

  getUsuario(id:number): Observable<Usuario>{
    return this.http.get<Usuario> ( Constantes.SERVER_API + "usuario/" + id);
  }

 


}
