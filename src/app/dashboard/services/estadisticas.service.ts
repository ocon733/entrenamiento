import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from 'src/app/calculo/interfaces/resultado.interface';
import { Constantes } from 'src/app/comun/constantes';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasService {

  constructor(private http:HttpClient) { }


  getResultados(tipo:string): Observable<Resultado[]>{
     return this.http.get<Resultado[]>(Constantes.SERVER_API + "resultados/" + tipo );
  }
}
