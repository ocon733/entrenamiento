import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-balanzas',
  templateUrl: './balanzas.component.html',
  styleUrls: ['./balanzas.component.css']
})
export class BalanzasComponent implements OnInit{

  figuras:number[] = [0,0,0,0];
  indiceFiguras:number[] = [0,0,0,0];
  sumaB1:number = 0;
  

ngOnInit(): void {
    this.llenaBalanza1();

  }
  
  llenaBalanza1(){
    for ( let i:number = 0; i < this.figuras.length; i++){
      this.figuras[i] = Math.round(Math.random() * 4) + 1;
      this.indiceFiguras[i] = Math.round(Math.random() * 3);

      this.sumaB1 = this.sumaB1 + (this.figuras[i] * this.indiceFiguras[i]);
    }


  }





}


/**
 * 
 * Generar 4 números aleatorios entre el 1 y el 5 -> será el valor de cada una de las 5 figuras
 * uno de esos núeros será  siempre 1 -> una de las figuras siempre valdrá 1
 * generar un número del 0 al 3 -> Serán las veces que se repita esa figura (repetirlo para cada figura)
 * sumar el total  -> valor de figuras * repeticiones de cada figura
 * ir sumando figuras con sus repeticiones hasta igualar la suma total
 * Montar lo mismo tres veces para cada balanza.
 * 
 */