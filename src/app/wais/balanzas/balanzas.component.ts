import { Component, OnInit } from '@angular/core';
import { Figura } from '../interfaces/figura.interface';

@Component({
  selector: 'app-balanzas',
  templateUrl: './balanzas.component.html',
  styleUrls: ['./balanzas.component.css']
})
export class BalanzasComponent implements OnInit{

  dibujos:Figura[]= [];
  multiBalanza1:number[] = [0,0,0];
  figurasMostrada:number[] = [0,0,0];
  sumaB1:number = 0;
  dibujosBalanza1:Figura[] = [];
  valorUnidad:number = 0;

ngOnInit(): void {
    this.asignarValores();
    this.llenaBalanza1();

  }

  /**
   * Asigna valores a cada una de las 6 figuras un valor del 0 al 3
   * Asegurandose que hay por lo menos un valor que vale 1
   */
  asignarValores(){
    let valor1:boolean = false;
    let rutas:string[] = ["/assets/pesos/a.png","/assets/pesos/b.png","/assets/pesos/c.png","/assets/pesos/d.png","/assets/pesos/e.png","/assets/pesos/f.png"];
    
    for ( let i:number = 0; i < 6; i++){
      let n:number = Math.round(Math.random() * 4); 
      let f:Figura = { valor: n , ruta: rutas[i]};
      this.dibujos.push(f) ;
      if ( n == 1){ 
        valor1 = true;
        this.valorUnidad = n;
      }
    }
    if ( !valor1){
        this.valorUnidad = Math.round(Math.random() * 7)
        this.dibujos[ this.valorUnidad].valor = 1;
    }
  }
  
/**
 * Indica que tres figuras van a mostrarse y les asigna un multiplo a cada una entre 0 y 3
 * Suma del plato de la balanza: valor de la figura mostrada * número repetido de esa figura
 */
  llenaBalanza1(){
    
    //indice de los dibujos a mostrar
    this.figurasMostrada[0] = Math.round(Math.random() * 2);
    this.figurasMostrada[1] = Math.round(Math.random() * 2) + 2 ;
    this.figurasMostrada[2] = Math.round(Math.random() * 2) + 4 ;

    // plato 1
    for ( let i:number = 0; i < this.figurasMostrada.length; i++){    
      this.multiBalanza1[i] = Math.round(Math.random() * 4);
      this.sumaB1 = this.sumaB1 + ( this.dibujos[ this.figurasMostrada[i] ].valor * this.multiBalanza1[i]);
    }

    this.llenarPlato2();

  }

  llenarPlato2(){
    let figura1:number = Math.round(Math.random() * 5) + 1;
    let figura2:number = Math.round(Math.random() * 5) + 1;

    let suma2:number = 0;
    let restante:number = this.sumaB1 - this.dibujos[figura1].valor + this.dibujos[figura2].valor;    
    
  }

  /**
   *    - hay que crear un objeto de tipo figura con un valor de texto con la ruta de la imagen y un valor asociado
   *    - para cada plato de balanza se cogen tres figuras y se les asigna un valor de repetición. 
   *    - La suma del plato tiene que igualarse con el otro plato de la balanza
   *    - se parte de dos figuras y se va incrementando su valor de repetición hasta no pueda subir más si sobrepasar la suma del otro plato. Se rellena con la figura de  valor 1
   *    - la figura del plato2 de mas valor se divide entre el valor restante y se multiplica por este. Se rellena hasta igualarlo con el valor unidad.
   *    - figura1 + figura2 * ( restante/ figura2) + figuraUnidad * ( restante - restante/figura2 )
   */





}


