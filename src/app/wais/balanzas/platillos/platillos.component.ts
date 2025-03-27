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


@Output() solucionEvent = new EventEmitter<number>();


  multiBalanza1:number[] = [0,0,0];
  sumaB1:number = 0;
  dibujosBalanza1:Figura[] = [];

  multiBalanza2:number[] = [0,0,0];
  sumaB2:number = 0;
  dibujosBalanza2:Figura[] = [];

  NFIGURAS:number = 3;
  diferencia:number = 0;


  ngOnInit(): void {

    this.llenaPlato1();
    this.llenaPlato2();

    this.sumarBalanza();
    this.regenerarPlatillos();
    this.igualarPlatillos();
    this.sumarBalanza();

    if ( this.pregunta){
      this.enviarSolucion(this.sumaB1);
    }

  }


  enviarSolucion(resultado:number){
    let b:any = { inices:this.multiBalanza2, figuras:this.dibujosBalanza2};
    this.solucionEvent.emit(b);
  }

/**
 * Genera un indice multiplicador para cada una de las tres figuras
 */
  llenaPlato1(){
   
    // plato 1
    this.dibujosBalanza1 = [];
    for ( let i:number = 0; i < this.NFIGURAS; i++){  
      this.multiBalanza1[i] = Math.round(Math.random() * 2);
      this.dibujosBalanza1.push(this.dibujos[ Math.round(Math.random() * 5)]);
    }

  }

  
  llenaPlato2(){
 
    // plato 2
    this.dibujosBalanza2 = [];
    for ( let i:number = 0; i < this.NFIGURAS; i++){    

      this.multiBalanza2[i] = Math.round(Math.random() * 2);
      this.dibujosBalanza2.push(this.dibujos[ Math.round(Math.random() * 5)]);
    }

   
  }

  sumarBalanza(){
    this.sumaB1 = 0;
    this.sumaB2 = 0;
    for ( let i:number =0; i< this.NFIGURAS; i++){
      this.sumaB1 = this.sumaB1 + ( this.dibujosBalanza1[ i ].valor * this.multiBalanza1[i]);
      this.sumaB2 = this.sumaB2 + ( this.dibujosBalanza2[ i ].valor * this.multiBalanza2[i]);
    }

    this.diferencia = this.sumaB1 - this.sumaB2;

    if( this.diferencia == 0 && this.pregunta){
        this.enviarSolucion(this.sumaB1);
    }
    

  }

  numSequence(n:number):Array<number>{
    return Array(n);
  }

  regenerarPlatillos(){

    let rep:number = 0;

    do {
      rep = rep + 1;
      if ( this.sumaB1 > this.sumaB2){
          this.llenaPlato1();
      }else{
          this.llenaPlato2();
      }

      this.sumarBalanza();
    
    } while (Math.abs(this.diferencia) > 6  && rep < 10);
  }
   
  igualarPlatillos(){
    if ( this.diferencia > 0 ){
      this.sumarPlatillo2( Math.abs(this.diferencia));
    }else if ( this.diferencia < 0){
      this.sumarPlatillo1( Math.abs(this.diferencia));
    }
  }



  sumarPlatillo2 (diferencia:number){
    let dibujo:Figura = {valor:0, ruta:""};
      for (let e:number =0 ; e < this.dibujos.length; e++){
        if ( this.dibujos[e].valor == diferencia){
            dibujo = this.dibujos[e];
        }
      }
      this.dibujosBalanza2.push(dibujo);

  }

  sumarPlatillo1(diferencia:number){
    let dibujo:Figura = {valor:0, ruta:""};
      for (let e:number =0 ; e < this.dibujos.length; e++){
        if ( this.dibujos[e].valor == diferencia){
            dibujo = this.dibujos[e];
        }
      }
      this.dibujosBalanza1.push(dibujo);
    }

}
