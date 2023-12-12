import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';

@Component({
  selector: 'app-multi',
  templateUrl: './multi.component.html',
  styleUrls: ['./multi.component.css']
})
export class MultiComponent implements OnInit{

  @Input()
  indice:number=0;

  @Input()
  finalizado:boolean=false;

  @Output()
  onChangeResultado: EventEmitter<Operacion> = new EventEmitter();

  resultado:boolean = false;

  alterado:number = 0;
  oper:Operacion = {indice:this.indice, msg:"",relleno:false,correcto:false};
  sumandos:number[] = [0,0];
  resultadoF:number=0;

  ngOnInit(){
    this.generaSuma();
    this.alteraSuma();
  }


  generaSuma(){
      this.sumandos[0] = Math.round(Math.random()*10000);

      do{
        this.sumandos[1] = Math.round(Math.random()*10);
      }while ( this.sumandos[1] ==0 || this.sumandos[1] ==1 || this.sumandos[1] ==10  )
    
  }

  alteraSuma(){
      let resultado:number = this.sumandos[0] * this.sumandos[1];
      /**
         * Posición a cambiar aleatoria entre 0 y numero de sumandos - 1
       */
      let posToChange:number = Math.round(Math.random() * 4); 

      /**
        * Si vale 0 no se cambia, si vale 1 se cambia
        */
      this.alterado = Math.round(Math.random()*1);
  
      /**
        * Si vale 0 suma y si vale 1 se resta
        */
      let operAlteracion:number = Math.round(Math.random()*1);

      if ( this.alterado == 1){
        if ( posToChange == 1){
            this.resultadoF =  operAlteracion == 0 ?  resultado + 1 : resultado - 1;
        }else if( posToChange == 2){
            this.resultadoF =  operAlteracion == 0 ?  resultado + 10 : resultado - 10;
        }else if( posToChange == 3){
            this.resultadoF =  operAlteracion == 0 ?  resultado + 100 : resultado - 100;    
        }else{
            this.resultadoF =  operAlteracion == 0 ?  resultado + 1000 : resultado - 1000;
        }
    }else{
        this.resultadoF =resultado;
    }
     
  }

  correccion(resp:string){
    
    if ( (resp == "V" && this.alterado == 0 ) || (resp == "F" && this.alterado == 1)){
      this.resultado = true;
      this.oper = {indice:this.indice, msg:"Correcto",relleno:true,correcto:true};
    }else{
      this.resultado = false;
      this.oper = {indice:this.indice, msg:"Error",relleno:true,correcto:false};
    }
 
    this.onChangeResultado.emit(this.oper);
  }

}
