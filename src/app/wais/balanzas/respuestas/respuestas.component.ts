import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Figura } from '../../interfaces/figura.interface';

@Component({
  selector: 'app-respuestas',
  templateUrl: './respuestas.component.html',
  styleUrls: ['./respuestas.component.css']
})
export class RespuestasComponent {

  @Input()
  dibujos:Figura[]= [];

 @Input()
 valor:any = {};



  multiBalanza1:number[] = [0,0,0];
  dibujosBalanza1:Figura[] = [];

  multiBalanza2:number[] = [0,0,0];
  dibujosBalanza2:Figura[] = [];

  multiBalanza3:number[] = [0,0,0];
  dibujosBalanza3:Figura[] = [];

  multiBalanza4:number[] = [0,0,0];
  dibujosBalanza4:Figura[] = [];

  

  NFIGURAS:number = 3;


  ngOnInit(): void {

    this.llenaPlatos();
    this.corregirBalanza();

  }


/**
 * Genera un indice multiplicador para cada una de las tres figuras
 */
  llenaPlatos(){
   
    
    for ( let i:number = 0; i < this.NFIGURAS; i++){  
      this.multiBalanza1[i] = Math.round(Math.random() * 2);
      this.dibujosBalanza1.push(this.dibujos[ Math.round(Math.random() * 5)]);

      this.multiBalanza2[i] = Math.round(Math.random() * 2);
      this.dibujosBalanza2.push(this.dibujos[ Math.round(Math.random() * 5)]);

      this.multiBalanza3[i] = Math.round(Math.random() * 2);
      this.dibujosBalanza3.push(this.dibujos[ Math.round(Math.random() * 5)]);

      this.multiBalanza4[i] = Math.round(Math.random() * 2);
      this.dibujosBalanza4.push(this.dibujos[ Math.round(Math.random() * 5)]);

    }
  }

  corregirBalanza(){

    let balanza:number = Math.round(Math.random() * 3);
    
    if ( balanza == 0){
      this.multiBalanza1 = this.valor.inices;
      this.dibujosBalanza1 = this.valor.figuras;

    }else if ( balanza == 1){
      this.multiBalanza2 = this.valor.inices;
      this.dibujosBalanza2 = this.valor.figuras;

    }else if ( balanza == 2){
      this.multiBalanza3 = this.valor.inices;
      this.dibujosBalanza3 = this.valor.figuras;

    }else if ( balanza == 3){
      this.multiBalanza4 = this.valor.inices;
      this.dibujosBalanza4 = this.valor.figuras;
    }

    alert("casilla correcta: " + (balanza+1));

  }


  sumarBalanza(){
  
    for ( let i:number =0; i< this.NFIGURAS; i++){
      //this.sumaB1 = this.sumaB1 + ( this.dibujosBalanza1[ i ].valor * this.multiBalanza1[i]);
  
    }
  }

  numSequence(n:number):Array<number>{
    return Array(n);
  }

}
