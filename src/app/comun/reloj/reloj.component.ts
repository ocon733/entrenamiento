import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent {



  @Input()
  atras:boolean=false;

  @Input()
  tiempo:number = 600;
 
  @Input()
  reloj:string = "10:00";

  timer:any;


  iniciar(){
    this.timer = setInterval( () => {
      this.contador();
    }, 1000 );
  }


  contador(){
    if ( this.atras){
      this.tiempo = this.tiempo -1;

       if (this.tiempo <=0){
        this.reloj = "00:00";
        this.finalizar();
       }
    }else{
      this.tiempo = this.tiempo +1;
    }

    let min:string = ""+ Math.trunc(this.tiempo / 60);
    min.length == 1 ? min = "0" + min : min = min;
    let seg:string = ""+ Math.trunc(this.tiempo % 60);
    seg.length == 1 ? seg = "0" + seg : seg = seg;
    this.reloj = min + ":" + seg;
    
  }

  finalizar(){
  
    clearInterval(this.timer);
  }
}
