import { Component, OnInit } from '@angular/core';
import { Figura } from '../interfaces/figura.interface';

@Component({
  selector: 'app-balanzas',
  templateUrl: './balanzas.component.html',
  styleUrls: ['./balanzas.component.css']
})
export class BalanzasComponent implements OnInit{

  dibujos:Figura[]= [];
  valorUnidad:number = 0;


ngOnInit(): void {
    this.asignarValores();
    
  }

  /**
   * Asigna valores a cada una de las 6 figuras un valor del 0 al 3
   * Asegurandose que hay por lo menos un valor que vale 1
   */
  asignarValores(){
    let valor1:boolean = false;
    let rutas:string[] = ["./assets/pesos/a.png","./assets/pesos/b.png","./assets/pesos/c.png","./assets/pesos/d.png","./assets/pesos/e.png","./assets/pesos/f.png"];
    
    for ( let i:number = 0; i < 6; i++){
      let n:number = Math.round(Math.random() * 3) + 1; 
      let f:Figura = { valor: n , ruta: rutas[i]};
      this.dibujos.push(f) ;
      if ( n == 1){ 
        valor1 = true;
        this.valorUnidad = n;
      }
    }
    if ( !valor1){
        this.valorUnidad = Math.round(Math.random() * 6)
        this.dibujos[ this.valorUnidad].valor = 1;
    }

  }


}


