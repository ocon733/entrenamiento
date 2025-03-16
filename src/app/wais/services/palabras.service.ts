import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Palabra } from '../interfaces/palabra.interface';
import { Constantes } from 'src/app/comun/constantes';
import { Casillero } from '../interfaces/Casillero.interface';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  constructor(private http:HttpClient) { }


  getPalabra(palabra_id:number) :Observable<any>{
    return this.http.get<Palabra>(Constantes.SERVER_AWS + palabra_id)
  }

  getCasillero(numero:string): Observable<any>{
    return this.http.get<Casillero>(Constantes.SERVER_API + "casillero/" + numero)
  }

}