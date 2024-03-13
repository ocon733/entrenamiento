import { Component } from '@angular/core';
import { RelojComponent } from '../../comun/reloj/reloj.component';
import { SecuenciasComponent } from '../secuencias/secuencias.component';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';
import { ResultadosService } from 'src/app/comun/resultados.service';
import { GlobalService } from 'src/app/comun/global.service';
import swal from 'sweetalert2';
import { Resultado } from '../interfaces/resultado.interface';

@Component({
  selector: 'app-secuencias-page',
  templateUrl: './secuencias-page.component.html',
  styleUrls: ['./secuencias-page.component.css']
})
export class SecuenciasPageComponent {

  iniciado:boolean = false;
  finalizado:boolean = false;
  puntuacion:number = 0;
  operaciones:Operacion[] = [];
  NUMOPERACIONES:number = 10;
  secuencias:number[] = [0,0,0,0,0,0,0,0,0,0];
  tiempo:number = 300;
  reloj:string = "05:00";

  constructor(private resultadoService:ResultadosService, private globalService:GlobalService){ }

  iniciar(){
    this.iniciado = true;
    for ( var i=0; i<this.NUMOPERACIONES; i++){
      this.operaciones[i] = {indice:i, msg:"",relleno:false,correcto:false}
    }

  }


  contador(){
    this.tiempo = this.tiempo -1;

    if ( this.tiempo <=0){
      this.reloj = "00:00";
      this.finalizar();
    }else{
      let min:string = ""+ Math.trunc(this.tiempo / 60);
      min.length == 1 ? min = "0" + min : min = min;
      let seg:string = ""+ Math.trunc(this.tiempo % 60);
      seg.length == 1 ? seg = "0" + seg : seg = seg;
      this.reloj = min + ":" + seg;
    }
  }


  finalizar(){
    this.finalizado = true;
  
    for (let oper of this.operaciones){
      if ( !oper.relleno || !oper.correcto){
        this.puntuacion++;      
      }
    }    
  }

  guardar(){

    swal.fire({
      title: "Confirmación",
      text: "¿Desea guardar el resultado?",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Sí"
    }).then((result) => {
      if (result.isConfirmed) {
          let res:Resultado = {
            id_resultado:null,
            id_usuario:  this.globalService.usuario.id_usuario,
            categoria:"aritmetica",
            tipo:"sumas",
            tiempo_total: this.tiempo,
            puntuacion: this.puntuacion,
            fecha:new Date()
            } 
          
          this.resultadoService.setResultado(res).subscribe(() => {
            swal.fire(  'Info',  'Registro guardado',  'success');
          });
        }
      });
  }


   verifica(oper:Operacion){
    this.operaciones[oper.indice] = oper;
  }




   
}
