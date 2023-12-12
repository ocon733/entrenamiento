import { Component, EventEmitter } from '@angular/core';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';
import { ResultadosService } from '../services/resultados.service';
import { Resultado } from '../interfaces/resultado.interface';




@Component({
  selector: 'app-sumas-page',
  templateUrl: './sumas-page.component.html',
  styleUrls: ['./sumas-page.component.css']
})
export class SumasPageComponent {
  iniciado:boolean = false;
  finalizado:boolean = false;
  puntuacion:number = 0;
  sumas:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  OPERACIONES:number = 50;
  /* DEMO ---> 
  sumas:number[] = [0,0,0,0,0];
  OPERACIONES:number = 5;
  <--- DEMO */
  operaciones:Operacion[] = [];
  tiempo:number = 300;
  reloj:string = "05:00";
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
    let puntos:number = 0;
    clearInterval(this.timer);
    for (let oper of this.operaciones){
      if ( !oper.relleno || !oper.correcto){
        puntos++;      
      }
    }
    this.puntuacion = puntos;

    
    let resp = confirm("¿Desea guardar el resultado?");

    if ( resp){
      let res:Resultado = {
        id_resultado:null,
        id_usuario: parseInt("" + sessionStorage.getItem("id")),
        categoria:"aritmetica",
        tipo:"sumas",
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
