import { Component } from '@angular/core';
import { Resultado } from 'src/app/calculo/interfaces/resultado.interface';
import { GlobalService } from 'src/app/comun/global.service';
import { ResultadosService } from 'src/app/comun/resultados.service';

@Component({
  selector: 'app-razonamiento',
  templateUrl: './razonamiento.component.html',
  styleUrls: ['./razonamiento.component.css']
})
export class RazonamientoComponent {

  tiempo:number = 0;
  reloj:string = "00:00";
  timer:any;
  cubos:string[] = ["./assets/c2.png","./assets/c2.png","./assets/c2.png","./assets/c2.png","./assets/c2.png","./assets/c2.png","./assets/c2.png","./assets/c2.png","./assets/c2.png"];

  constructor(  private globalService:GlobalService,
                private resultadosService:ResultadosService){}

  iniciar(){
    this.generar();
    this.timer = setInterval( () => {
      this.contador();
    }, 1000 );
  }

  finalizar(){
      clearInterval(this.timer);    
  }


  generar(){

    for (var i=0; i<9; i++){
      let generado = Math.round(Math.random() * 3);
      if (generado == 1){
          this.cubos[i] = "./assets/c1.png";
      }else if(generado == 2){
        this.cubos[i] = "./assets/c2.png";
      }else{

        let giro = Math.round(Math.random() * 4);
        if ( giro == 0){
          this.cubos[i] = "./assets/c3a.png";
        }else if ( giro == 1){
          this.cubos[i] = "./assets/c3b.png";
        }else if ( giro == 2){
          this.cubos[i] = "./assets/c3c.png";
        }else{
          this.cubos[i] = "./assets/c3d.png";
        }
      }

    }


  }


  contador(){

    this.tiempo = this.tiempo +1;
    let min:string = ""+ Math.trunc(this.tiempo / 60);
    min.length == 1 ? min = "0" + min : min = min;
    let seg:string = ""+ Math.trunc(this.tiempo % 60);
    seg.length == 1 ? seg = "0" + seg : seg = seg;
    this.reloj = min + ":" + seg;
  }

  guardar(){

    let res:Resultado = {
      id_resultado:null,
      id_usuario:  this.globalService.usuario.id_usuario,
      categoria:"wais4",
      tipo:"cubos",
      tiempo_total: this.tiempo,
      puntuacion: 1,
      fecha:new Date()
      } 
    
    this.resultadosService.setResultado(res).subscribe(() => {
      alert("Registro guardado");
    });
  }

}
