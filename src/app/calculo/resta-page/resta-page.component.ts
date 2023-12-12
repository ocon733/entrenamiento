import { Component, EventEmitter } from '@angular/core';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';
import { Resultado } from '../interfaces/resultado.interface';
import { ResultadosService } from '../services/resultados.service';




@Component({
  selector: 'app-resta-page',
  templateUrl: './resta-page.component.html',
  styleUrls: ['./resta-page.component.css']
})
export class RestaPageComponent {
  iniciado:boolean = false;
  finalizado:boolean = false;
  puntuacion:number = 0;
  sumas:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  OPERACIONES:number = 40;
  //sumas:number[] = [0,0,0,0,0];
  //OPERACIONES:number = 5;

  operaciones:Operacion[] = [];
  tiempo:number = 600;
  reloj:string = "10:00";
  timer:any;

  constructor(private resultadoService:ResultadosService){ }

  iniciar(){

    this.iniciado = true;

    // se inicializa el array de operaciones
    for ( var i=0; i<this.OPERACIONES; i++){
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

    let resp = confirm("¿Desea guardar el resultado?");

    if ( resp){
      let res:Resultado = {
        id_resultado:null,
        id_usuario: parseInt("" + sessionStorage.getItem("id")),
        categoria:"aritmetica",
        tipo:"restas",
        tiempo_total: this.tiempo,
        puntuacion: this.puntuacion
        } 
      
      this.resultadoService.setResultado(res).subscribe(() => {
        alert("Registro guardado");
      });
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


  verifica(oper:Operacion){
    this.operaciones[oper.indice] = oper;
  }
                                              
}
