import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Figura } from '../../interfaces/figura.interface';

@Component({
  selector: 'app-platillos',
  templateUrl: './platillos.component.html',
  styleUrls: ['./platillos.component.css']
})
export class PlatillosComponent implements OnInit{

  @Input()
  dibujos:Figura[]= [];

 @Input()
 pregunta:boolean = false;


@Output() solucion = new EventEmitter<number>();


  multiBalanza1:number[] = [0,0,0,0,0,0];
  figurasMostrada1:number[] = [0,0,0,0,0,0];
  sumaB1:number = 0;
  dibujosBalanza1:Figura[] = [];

  multiBalanza2:number[] = [0,0,0,0,0,0];
  figurasMostrada2:number[] = [0,0,0,0,0,0];
  sumaB2:number = 0;
  dibujosBalanza2:Figura[] = [];

  NFIGURAS:number = 6;


  ngOnInit(): void {

    this.llenaPlato1();
    this.llenaPlato2();

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

  
  llenaPlato2(){
 
    // plato 2
    for ( let i:number = 0; i < this.NFIGURAS; i++){    

      this.multiBalanza2[i] = Math.round(Math.random() * 3);
      
    }

   
  }

  sumarBalanza(){
    for ( let i:number =0; i< this.NFIGURAS; i++){
      this.sumaB1 = this.sumaB1 + ( this.dibujos[ i ].valor * this.multiBalanza1[i]);
      this.sumaB2 = this.sumaB2 + ( this.dibujos[ i ].valor * this.multiBalanza2[i]);
    }
  }

  numSequence(n:number):Array<number>{
    return Array(n);
  }

}
