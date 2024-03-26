import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Operacion } from 'src/app/dashboard/interfaces/operacion.interface';


@Component({
  selector: 'app-simbolos',
  templateUrl: './simbolos.component.html',
  styleUrls: ['./simbolos.component.css']
})
export class SimbolosComponent implements OnInit{


  @Input()
  indice:number=0;

  @Input()
  finalizado:boolean=false;

  @Output()
  onChangeResultado: EventEmitter<Operacion> = new EventEmitter();

  oper:Operacion = {indice:this.indice, msg:"",relleno:false,correcto:false};
  rutas:string[] = [];
  muestra:string = "";
  isSelected:boolean= false;
  selected:boolean[] = [false,false,false,false,false,false];
  correcto = false;

  ngOnInit(): void {
    this.generateImg();
  }


  generateImg(){
    let ngaleria:number = Math.round(Math.random() * 21) + 1;
    let nfila:number = 0;
    let ncol:number = 0;
    
    for ( let i=0; i< 6; i++){
      nfila = Math.round(Math.random() * 3) + 1;
      ncol = Math.round(Math.random() * 18) + 1;
      this.rutas[i] = "./assets/simbolos/" + ngaleria + "/fila-" + nfila + "-columna-" + ncol + ".png";
    }

    this.muestra = this.rutas[ Math.round(Math.random() * 6)];
    
  }

  valida(valor:number){
    this.selected[valor] =  this.selected[valor] == false ? true : false;
    this.corregir();
  }

  corregir(){
    this.correcto = true;
    this.isSelected = false;

    for ( let i:number = 0; i< 6; i++){
      // si está seleccionada y no es igual que la muestra es incorrecto
      if ( this.selected[i] == true && this.rutas[i] != this.muestra  ){
                this.correcto = false;
      }

      // confirmar que por lo menos hay una seleccionada
      if ( this.selected[i] == true){
        this.isSelected = true;
      }

    }

    // si no se ha seleccionado ninguna pasa a incorecto
    if ( this.isSelected == false){
      this.correcto = false;
    }

    if ( this.correcto){
        this.oper = {indice:this.indice, msg:"Correcto",relleno:true,correcto:true};
      }else{
        this.oper = {indice:this.indice, msg:"Error",relleno:true,correcto:false};
      }



    this.onChangeResultado.emit(this.oper);


  }


}
