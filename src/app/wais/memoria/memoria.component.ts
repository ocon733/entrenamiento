import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit{

  memoriaForm!: FormGroup;
  tiempo:number = 0;
  reloj:string = "00:00";
  timer:any;
  timememorytest:number = 20;
  array:number[] = [];
  previo:boolean = true;


  constructor(private formBuilder:FormBuilder) {}

  ngOnInit(): void {

    this.memoriaForm = this.formBuilder.group(
      {
      generado:[""],
      generado10:[""],
      generado1:[""],
      generado2:[""],
      generado3:[""],
      generado4:[""],
      generado5:[""],
      generado6:[""],
      generado7:[""],
      generado8:[""],
      generado9:[""]
      });
    
  }

  iniciar(){

    this.timer = setInterval( () => {
      this.contador();
    }, 1000 );
  }

  finalizar(){
    clearInterval(this.timer);
    alert(this.array)
  }

  contador(){

    if ( this.timememorytest > 0){
      this.timememorytest--;
      
      if ( this.timememorytest % 2 ){
        let num:number = Math.round(Math.random() * 9999);
        this.array.push(num);
        this.memoriaForm.controls["generado"].setValue(""+num);
      }
    }else{
      this.previo = false;
    }

    //termina la generacion de números y empieza el tiempo para escribirlos en orden
    if ( !this.previo){
      this.memoriaForm.controls["generado"].setValue("");
      this.tiempo = this.tiempo +1;
      let min:string = ""+ Math.trunc(this.tiempo / 60);
      min.length == 1 ? min = "0" + min : min = min;
      let seg:string = ""+ Math.trunc(this.tiempo % 60);
      seg.length == 1 ? seg = "0" + seg : seg = seg;
      this.reloj = min + ":" + seg;
    }

  }
}
