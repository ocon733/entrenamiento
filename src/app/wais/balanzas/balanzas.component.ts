import { Component, OnInit } from '@angular/core';
import { Figura } from '../interfaces/figura.interface';

@Component({
  selector: 'app-balanzas',
  templateUrl: './balanzas.component.html',
  styleUrls: ['./balanzas.component.css']
})
export class BalanzasComponent implements OnInit{

  dibujos:Figura[]= [];
  resultado:number =0;
  valores:number[] = [1,2,3,4,5,6];

  solucion:any = {};


ngOnInit(): void {
    this.asignarValores();
  }


  asignarValores(){
    let valor1:boolean = false;
    let rutas:string[] = ["./assets/pesos/a.png","./assets/pesos/b.png","./assets/pesos/c.png","./assets/pesos/d.png","./assets/pesos/e.png","./assets/pesos/f.png"];

    //desordena los valores
    this.shuffleArray();


    //Asigan valores a los dibujos
    for ( let i:number = 0; i < 6; i++){

      let f:Figura = { valor: this.valores[i] , ruta: rutas[i]};
      this.dibujos.push(f) ;
    }


  }

   shuffleArray() {
    let array:number[] = this.valores;
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambio de elementos
    }
    this.valores = array;
  }


  getSolucion(valor:any){
    this.solucion = valor;
  }

}




