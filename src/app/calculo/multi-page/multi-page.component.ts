import { Component, EventEmitter } from '@angular/core';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';
import { Resultado } from '../interfaces/resultado.interface';
import { ResultadosService } from '../../comun/resultados.service';
import { GlobalService } from 'src/app/comun/global.service';
import swal from 'sweetalert2';



@Component({
  selector: 'app-sumas-page',
  templateUrl: './multi-page.component.html',
  styleUrls: ['./multi-page.component.css']
})
export class MultiPageComponent {
  iniciado:boolean = false;
  finalizado:boolean = false;
  puntuacion:number = 0;
  sumas:number[] = [0,0,0,0,0,0,0,0,0,0];
  operaciones:Operacion[] = [];
  OPERACIONES:number = 10;
  tiempo:number = 300;
  reloj:string = "05:00";
  timer:any;

  constructor(private resultadoService:ResultadosService,private globalService:GlobalService){ }

  iniciar(){

    this.iniciado = true;

    // se inicializa el array de operaciones
    for ( var i=0; i< this.OPERACIONES; i++){
      this.operaciones[i] = {indice:i, msg:"",relleno:false,correcto:false}
    }




    this.timer = setInterval( () => {
      this.contador();
    }, 1000 );
  }

  finalizar(){
    this.finalizado = true;
    clearInterval(this.timer);
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
          tipo:"multi",
          tiempo_total: this.tiempo,
          puntuacion: this.puntuacion,
          fecha:new Date()
          } 
    
        this.resultadoService.setResultado(res).subscribe(() => {
        swal.fire(  'Info',  'Registro guardado',  'success'); });
      }
    });
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


  verifica(oper:Operacion){
    this.operaciones[oper.indice] = oper;
  }
                                              
}
