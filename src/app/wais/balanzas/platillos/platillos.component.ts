import { Component, Input, OnInit } from '@angular/core';
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
 pregunta:boolean = true;


  multiBalanza1:number[] = [0,0,0];
  figurasMostrada1:number[] = [0,0,0];
  sumaB1:number = 0;
  dibujosBalanza1:Figura[] = [];

  multiBalanza2:number[] = [0,0,0];
  figurasMostrada2:number[] = [0,0,0];
  sumaB2:number = 0;
  dibujosBalanza2:Figura[] = [];


  diferencia:number = 0;
  mayor:number = 0;
  igualados:boolean = false;
  unidad:number = 0;





  ngOnInit(): void {
    this.llenaBalanza1();
  }


  llenaBalanza1(){
    
    //indice de los dibujos a mostrar
    this.figurasMostrada1[0] = Math.round(Math.random() * 2);
    this.figurasMostrada1[1] = Math.round(Math.random() * 2) + 1 ;
    this.figurasMostrada1[2] = Math.round(Math.random() * 2) + 3 ;

    // plato 1
    for ( let i:number = 0; i < this.figurasMostrada1.length; i++){    
      this.multiBalanza1[i] = Math.round(Math.random() * 3);
      this.sumaB1 = this.sumaB1 + ( this.dibujos[ this.figurasMostrada1[i] ].valor * this.multiBalanza1[i]);
    }

    this.llenarPlato2();



  }

  
  llenarPlato2(){

    //indice de los dibujos a mostrar
    this.figurasMostrada2[0] = Math.round(Math.random() * 2);
    this.figurasMostrada2[1] = Math.round(Math.random() * 2) + 1 ;
    this.figurasMostrada2[2] = Math.round(Math.random() * 2) + 3 ;

    // plato 2
    for ( let i:number = 0; i < this.figurasMostrada2.length; i++){    
      this.multiBalanza2[i] = Math.round(Math.random() * 3);
      this.sumaB2 = this.sumaB2 + ( this.dibujos[ this.figurasMostrada2[i] ].valor * this.multiBalanza2[i]);
        
    }

    this.igualarPlatillos();
   
  }


  igualarPlatillos(){

    let intentos:number = 5;

      // obtener la figura de valor 1
      for (let i =0; i< this.dibujos.length; i++){
        if ( this.dibujos[i].valor == 1){
          this.unidad = i;
        }
      }
      
      do {
        intentos--;
        // Se identifica cual platillo es mayor y la diferencia o si son ya iguales
        if ( this.sumaB1 > this.sumaB2){
          this.diferencia = this.sumaB1 - this.sumaB2;
          this.mayor = 1;
        }else if (this.sumaB2 > this.sumaB1){
          this.diferencia = this.sumaB2 - this.sumaB1;
          this.mayor = 2;
        }else{
          this.igualados = true;
          this.diferencia = 0;
          this.mayor = 0;
    
        }


        // si la diferencia es menor o igual a 3 se ajusta añadiendo las figuras de unidad que falten
        if (this.diferencia <= 3 && !this.igualados){
          if ( this.mayor == 1){
            this.figurasMostrada2.push ( this.unidad);
            this.multiBalanza2.push ( this.diferencia);
          }else{
            this.figurasMostrada1.push ( this.unidad);
            this.multiBalanza1.push ( this.diferencia);
          }
         
          this.igualados = true;
        }
      
      // si no están igualados quitar un elemento al mayor y restar un elemento al menor y volver a calcular  
      if ( !this.igualados){
         
         if ( this.mayor == 1){
          this.multiBalanza1[0] = this.multiBalanza1[0] - 1;
          this.multiBalanza2[0] = this.multiBalanza2[0] + 1;
         }else{
          this.multiBalanza2[0] = this.multiBalanza2[0] - 1;
          this.multiBalanza1[0] = this.multiBalanza1[0] + 1;
         }
         
      }

      this.recalcularSumas();      


    }while ( !this.igualados && intentos > 0);

  }


  recalcularSumas(){
    this.sumaB2 = 0;
        for ( let i:number = 0; i < this.figurasMostrada2.length; i++){    
          this.sumaB2 = this.sumaB2 + ( this.dibujos[ this.figurasMostrada2[i] ].valor * this.multiBalanza2[i]);         
        }

        this.sumaB1 = 0;
        for ( let i:number = 0; i < this.figurasMostrada1.length; i++){    
          this.sumaB1 = this.sumaB1 + ( this.dibujos[ this.figurasMostrada1[i] ].valor * this.multiBalanza1[i]);         
        }

  }

  mostrar(){
    if ( this.pregunta){
      this.pregunta = false;
    }else{
      this.pregunta = true;
    }
  }



}
