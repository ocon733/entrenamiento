import { Component, ElementRef, ViewChild } from '@angular/core';
import { Resultado } from 'src/app/calculo/interfaces/resultado.interface';
import { EstadisticasService } from '../../services/estadisticas.service';


@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent {

  resultados:Resultado[] = [];

  displayedColumns:string[] = [ 'tipo','puntuacion','tiempo_total', 'fecha'];
  
  @ViewChild('test') test!: ElementRef;

  operacion:string = "";
  etiquetafallos:string="";

  constructor( private estadisticaService: EstadisticasService) {}




  cargaEstadisticas(){

    let tipo:string = this.test.nativeElement.value;
    this.operacion = this.test.nativeElement.selectedOptions[0].innerText;

    if ( this.operacion == "Comprensión WAIS4" || this.operacion == "Razonamiento WAIS4" ){
      this.etiquetafallos = "Puntuación";
    }else {
      this.etiquetafallos = "Número de fallos";
    }

    this.estadisticaService.getResultados(tipo).subscribe((resp) => this.resultados = resp );



  }

}
