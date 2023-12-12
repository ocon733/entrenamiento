import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Resultado } from '../interfaces/resultado.interface';
import { Constantes } from 'src/app/comun/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResultadosService {

  constructor(private http: HttpClient) { }

  setResultado(res:Resultado):Observable<Resultado>{
    return this.http.post<Resultado> ( Constantes.SERVER_API + "resultados/save",res);
  }

}
