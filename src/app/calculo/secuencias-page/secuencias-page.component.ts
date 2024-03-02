import { Component } from '@angular/core';
import { RelojComponent } from '../../comun/reloj/reloj.component';
import { SecuenciasComponent } from '../secuencias/secuencias.component';

@Component({
  selector: 'app-secuencias-page',
  templateUrl: './secuencias-page.component.html',
  styleUrls: ['./secuencias-page.component.css']
})
export class SecuenciasPageComponent {

  iniciado:boolean = false;
  finalizado:boolean = false;
  puntuacion:number = 0;
  reloj:string = "10:00";


  iniciar(){
    this.iniciado = true;
  }
   
}
