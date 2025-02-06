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
 
  
  @Output() solucion = new EventEmitter<number>();
  
  
    multiBalanza1:number[] = [0,0,0,0,0,0];
    sumaB1:number = 0;
    dibujosBalanza1:Figura[] = [];
  
  
    NFIGURAS:number = 6;
  
  
    ngOnInit(): void {
  
      this.llenaPlato1();
      this.sumarBalanza();
  
    }
  
  
    enviarSolucion(resultado:number){
      this.solucion.emit(resultado);
    }
  
  /**
   * Genera un indice multiplicador para cada una de las tres figuras
   */
    llenaPlato1(){
     
      // plato 1
      for ( let i:number = 0; i < this.NFIGURAS; i++){  
        this.multiBalanza1[i] = Math.round(Math.random() * 3);
      }
  
    }
  
  
    sumarBalanza(){
      for ( let i:number =0; i< this.NFIGURAS; i++){
        this.sumaB1 = this.sumaB1 + ( this.dibujos[ i ].valor * this.multiBalanza1[i]);
      }
    }

    numSequence(n:number):Array<number>{
      return Array(n);
    }
}
