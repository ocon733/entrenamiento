import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Palabra } from '../interfaces/palabra.interface';
import { Constantes } from 'src/app/comun/constantes';

@Injectable({
  providedIn: 'root'
})
export class PalabrasService {

  constructor(private http:HttpClient) { }


  getPalabra(palabra_id:number) :Observable<Palabra>{
    return this.http.get<Palabra>(Constantes.SERVER_API + "palabra/" + palabra_id)
  }

}