import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { OPER } from '../interfaces/operaciones.enum';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';

@Component({
  selector: 'app-secuencias',
  templateUrl: './secuencias.component.html',
  styleUrls: ['./secuencias.component.css']
})
export class SecuenciasComponent implements OnInit {

  @Input()
  indice:number=0;

  @Input()
  finalizado:boolean=false;

  @Output()
  onChangeResultado: EventEmitter<Operacion> = new EventEmitter();

  resultado:boolean = false;
  oper:Operacion = {indice:this.indice, msg:"",relleno:false,correcto:false};

  valor:string = "";

  
  
  secuencia:number[] = [0,0,0,0,0,0];



  ngOnInit(): void {
    this.generarTipoSecuencia();  
  }


  /**
   * Tipo de alteración de la secuencia
   */
  generarTipoSecuencia(){

    let tipo =  Math.round(Math.random() * 3);

    if ( tipo == 0){
      // secuencia simple
      // genera una secuencia normal con un valor inicial con incremento por una operación
      this.generaSecuenciaSimple();

    }else if (tipo == 1){
      // secuencia doble
      // genera una secuencia con un valor inicial que alterna con dos incrementos y dos operaciones diferentes
      this.generaSecuenciaDoble();
    }else if ( tipo == 2){
      this.generaSecuenciaParImpar();
    }else{
      this.generaSecuenciaIncremental();
    }

  }

  


  generaSecuenciaSimple(){
   
    let v_inicial:number = Math.round(Math.random()*100);
    let oper:any = this.tipoCalculo();
    let incremento:number = Math.round(Math.random()*10);

    // CORRECCIONES DE VALORES
    let arr:number[] = this.validaValorInicialIncremento(v_inicial, incremento, oper);
    incremento = arr[0];
    v_inicial = arr[1];


      this.secuencia[0] = v_inicial;
      this.secuencia[1] = this.aplicaOperacion(v_inicial, incremento, oper );
      this.secuencia[2] = this.aplicaOperacion(this.secuencia[1], incremento, oper);
      this.secuencia[3] = this.aplicaOperacion(this.secuencia[2], incremento, oper);
      this.secuencia[4] = this.aplicaOperacion(this.secuencia[3], incremento, oper);
      this.secuencia[5] = this.aplicaOperacion(this.secuencia[4], incremento, oper);

      console.log("tipo: simple, operacion: " + this.queoper(oper) + "  incremento:" + incremento);

  }

  generaSecuenciaDoble(){
   
    let v_inicial:number = Math.round(Math.random()*100);
    let oper:any = this.tipoCalculo();
    let oper2:any = this.tipoCalculo();
    while (oper2 == OPER.division){
      oper2 = this.tipoCalculo();
    }
    
    let incremento:number = Math.round(Math.random()*10);
    let incremento2:number = Math.round(Math.random()*10);
    
   

    // CORRECCIONES DE VALORES
    let arr:number[] = this.validaValorInicialIncremento(v_inicial, incremento, oper);
    incremento = arr[0];
    v_inicial = arr[1];

    let arr2:number[] = this.validaValorInicialIncremento(v_inicial, incremento2, oper2);
    incremento2 = arr2[0];

      this.secuencia[0] = v_inicial;
      this.secuencia[1] = this.aplicaOperacion(v_inicial, incremento2, oper2 );
      this.secuencia[2] = this.aplicaOperacion(this.secuencia[1], incremento, oper);
      this.secuencia[3] = this.aplicaOperacion(this.secuencia[2], incremento2, oper2);
      this.secuencia[4] = this.aplicaOperacion(this.secuencia[3], incremento, oper);
      this.secuencia[5] = this.aplicaOperacion(this.secuencia[4], incremento2, oper2);

      console.log("tipo: doble, operacion: " + this.queoper(oper) + "  incremento:" + incremento + " oper2: " + this.queoper(oper2) + " incremento2:" + incremento2);
  }

  generaSecuenciaParImpar(){
    let v_inicial:number = Math.round(Math.random()*100);
    let oper:any = this.tipoCalculo();
    let incremento:number = Math.round(Math.random()*10);

    let v_inicial2:number = Math.round(Math.random()*100);
    let oper2:any = this.tipoCalculo();
    while (oper2 == OPER.division){
      oper2 = this.tipoCalculo();
    }

    let incremento2:number = Math.round(Math.random()*10);
    

    // CORRECCIONES DE VALORES
    let arr:number[] = this.validaValorInicialIncremento(v_inicial, incremento, oper);
    incremento = arr[0];
    v_inicial = arr[1];

    // CORRECCIONES DE VALORES
    let arr2:number[] = this.validaValorInicialIncremento(v_inicial2, incremento2, oper2);
    incremento2 = arr2[0];
    v_inicial2 = arr2[1];

      this.secuencia[0] = v_inicial;
      this.secuencia[1] = v_inicial2;
      this.secuencia[2] = this.aplicaOperacion(v_inicial, incremento, oper);
      this.secuencia[3] = this.aplicaOperacion(this.secuencia[1], incremento2, oper2);
      this.secuencia[4] = this.aplicaOperacion(this.secuencia[2], incremento, oper);
      this.secuencia[5] = this.aplicaOperacion(this.secuencia[3], incremento2, oper2);

      console.log("tipo: par/impar, operacion: " + this.queoper(oper) + "  oper2: " + this.queoper(oper2) + " incremento:" + incremento + "  incremento2:" + incremento2);
  }

  generaSecuenciaIncremental(){
    let v_inicial:number = Math.round(Math.random()*100);
    let oper:any = this.tipoCalculo();
    let incremento:number = Math.round(Math.random()*10);
    let incremento2:number = Math.round(Math.random()*5);

    while (oper == OPER.division){
      oper = this.tipoCalculo();
    }


    // CORRECCIONES DE VALORES
    let arr:number[] = this.validaValorInicialIncremento(v_inicial, incremento, oper);
    incremento = arr[0];
    v_inicial = arr[1];

      this.secuencia[0] = v_inicial;
      this.secuencia[1] = this.aplicaOperacion(v_inicial, incremento + incremento2, oper );
      this.secuencia[2] = this.aplicaOperacion(this.secuencia[1], incremento + incremento2, oper); 
      this.secuencia[3] = this.aplicaOperacion(this.secuencia[2], incremento + incremento2, oper);
      this.secuencia[4] = this.aplicaOperacion(this.secuencia[3], incremento + incremento2, oper);
      this.secuencia[5] = this.aplicaOperacion(this.secuencia[4], incremento + incremento2, oper);

      console.log("tipo: incremental, operacion: " + this.queoper(oper) + " incremento:" + incremento + "  incremento2:" + incremento2);
  }

  queoper(oper:number){
    
    if ( oper == 0 ) return "SUMA";
    else if ( oper == 1) return "RESTA";
    else if( oper == 2) return "MULTIPLICACION";
    else if (oper == 3) return "DIVISION";
    else{
      return "wtf ?";
    }
  }





  validaValorInicialIncremento(v_inicial:number, incremento:number, oper:number):number[]{

    // CORRECCIONES DE VALORES
        //evita multiplicación o división por 0 ó 1
        if ( oper == OPER.multiplicacion || oper == OPER.division){

          while ( incremento == 0 || incremento == 1 || incremento > 5){
              incremento = Math.round(Math.random()*5);
          }

          while (  v_inicial == 0 ||  v_inicial == 1){
            v_inicial = Math.round(Math.random()*100);
          }
        }

    //solo divisiones enteras
    if ( oper == OPER.division){
        if ( v_inicial % 5 == 0){
          v_inicial = v_inicial * 250; 
          incremento = 5;
        }else if ( v_inicial % 3 == 0){
          v_inicial = v_inicial * 27;    
          incremento = 3;
        }else{
          v_inicial = v_inicial * 16;
          incremento = 2;
             if ( v_inicial % 2 != 0){
               v_inicial = v_inicial + 1;
             }
        }
    }

    return [incremento,v_inicial];
  }


/**
 * Define la operación a realizar sobre la secuencia
 * @returns Operacion a realizar
 */
  tipoCalculo(){
    let num = Math.round(Math.random()*3);
    if( num == 0){
      return OPER.suma;
    }else if(num == 1){
      return OPER.resta;
    }else if( num == 2){
      return OPER.multiplicacion;
    }else if( num == 3){
      return OPER.division;
    }else{
      return undefined;
    }
  } 

  /**
   * Genera el siguiente número a partir del valor y la operación indicada
   * @param operacion
   * @param n
   * @returns número de la secuencia
   */
  aplicaOperacion( n:number, incremento:number, operacion:number):number{

    if ( operacion == OPER.suma){     
      return n + incremento;
    }else if ( operacion == OPER.resta){
      
        return n - incremento;
    }else if ( operacion == OPER.multiplicacion){
      
        return n * incremento;
    }else if ( operacion == OPER.division){
      
        return n / incremento;
    }else{
        return 0;
    }

  }


  corregir(){

    if ( this.valor == "" + this.secuencia[5]){
      this.resultado = true;
      this.oper = {indice:this.indice, msg:"Correcto",relleno:true,correcto:true};
    }else{
      this.resultado = false;
      this.oper = {indice:this.indice, msg:"Error",relleno:true,correcto:false};
    }
    
    this.onChangeResultado.emit(this.oper);

  }



}

