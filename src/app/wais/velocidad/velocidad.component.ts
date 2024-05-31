import { Component } from '@angular/core';
import { Resultado } from 'src/app/calculo/interfaces/resultado.interface';
import { GlobalService } from 'src/app/comun/global.service';
import { ResultadosService } from 'src/app/comun/resultados.service';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';
import swal from 'sweetalert2';

@Component({
  selector: 'app-velocidad',
  templateUrl: './velocidad.component.html',
  styleUrls: ['./velocidad.component.css']
})
export class VelocidadComponent {

  tiempo:number = 300;
  reloj:string = "05:00";
  simbolos:number[] = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
  OPERACIONES:number = 20;
  operaciones:Operacion[] = [];
  timer:any;
  iniciado:boolean = false;
  finalizado:boolean = false;
  puntuacion:number = 0;

  constructor(private resultadoService:ResultadosService, private globalService:GlobalService){ }

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

}
