import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Constantes } from 'src/app/comun/constantes';
import { Usuario } from '../interfaces/perfil.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    getLogin(user:Usuario):Observable<Usuario>{
      return this.http.post<Usuario> ( Constantes.SERVER_API + "login",user);
    }
  
}
