import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Resultado } from 'src/app/calculo/interfaces/resultado.interface';
import { GlobalService } from 'src/app/comun/global.service';
import { ResultadosService } from 'src/app/comun/resultados.service';
import { PalabrasService } from '../services/palabras.service';
import swal from 'sweetalert2';
import { Casillero } from '../interfaces/Casillero.interface';

@Component({
  selector: 'app-memoria',
  templateUrl: './memoria.component.html',
  styleUrls: ['./memoria.component.css']
})
export class MemoriaComponent implements OnInit{

  memoriaForm!: FormGroup;
  tiempo:number = 0;
  reloj:string = "00:00";
  /**
   * Contador de tiempo para la puntuación del ejercicio
   */
  timer:any;

  /**
   * Contador de tiempo para la generación de números a memorizar
   */
  timer_generacion:any;

  timememorytest:number = 20;
  //array:number[] = [0,0,0,0,0,0,0,0,0];
  array:number[] = [0,0,0,0,0];
  ayuda:string[] = [];
  num:number = 5;
  previo:boolean = true;
  generado:number =0;
  pos:number =0;
  puntuacion:number =0;
  terminado:boolean= false;

  /**
   * Se genera un nuevo numero hasta 5
   */
  tiempo_generacion:number = 5;

  /**
   * Milisegundos en cada generación de número a memorizar
   */
  timeMemory:number = 10000; 

  constructor(private formBuilder:FormBuilder,
    private globalService:GlobalService,
    private resultadosService:ResultadosService,
    private palabrasService: PalabrasService ){}

  ngOnInit(): void {

    this.memoriaForm = this.formBuilder.group(
      {
      generado0:[""],
      generado1:[""],
      generado2:[""],
      generado3:[""],
      generado4:[""]
/*
      generado5:[""],
      generado6:[""],
      generado7:[""],
      generado8:[""]
*/

      });
    
  }

  /**
   * Timer para la generación de números a memorizar
   */
  iniciar(){
    this.contador_generacion();
    this.timer_generacion = setInterval( () => {
      this.contador_generacion();
    }, this.timeMemory );
  }

  /**
   * Timer para el reloj y la puntación del ejercicio
   */
  iniciar_reloj(){
    this.timer = setInterval( () => {
      this.contador();
    }, 1000 );
  }




  finalizar(){
    clearInterval(this.timer);
   
    for (let i:number=0; i<this.num ; i++){
      if ( this.memoriaForm.controls["generado"+i].value == ""+this.array[i]){
        this.puntuacion++;
      }
    }
    this.terminado = true;


  }

  contador_generacion(){
      
      if ( this.tiempo_generacion <=0){
        clearInterval(this.timer_generacion);
        this.previo = false;
        this.iniciar_reloj();
      }else{
        this.generado = Math.round(Math.random() * 9999);
        this.array[this.pos] = this.generado;
        this.pos++;
        if( this.globalService.usuario.nombre !=""){
          this.ayuda.length = 0;
          this.ayudaCasillero( this.generado );
        }
      }      
      this.tiempo_generacion--;
  }

  ayudaCasillero(num:number){
    let numero:string = "" + num;
    let n1:string = numero.substring(0,2);
    let n2:string = numero.substring(2,numero.length);
    let cadena:string = "";
   
    this.palabrasService.getCasillero(n1).subscribe( value => {
      cadena = n1 + ":  " + value.palabra1 + ", " + value.palabra2 + ", " + value.palabra3 + "\n";
      this.ayuda.push(cadena);
    });

    this.palabrasService.getCasillero(n2).subscribe( value => {
      cadena = n2 + ":  " + value.palabra1 + ", " + value.palabra2 + ", " + value.palabra3 + "\n";
      this.ayuda.push(cadena);
    });

    

  }

  contador(){

      this.generado = 0;
      this.tiempo = this.tiempo +1;
      let min:string = ""+ Math.trunc(this.tiempo / 60);
      min.length == 1 ? min = "0" + min : min = min;
      let seg:string = ""+ Math.trunc(this.tiempo % 60);
      seg.length == 1 ? seg = "0" + seg : seg = seg;
      this.reloj = min + ":" + seg;

  }

  guardar(){
     swal.fire({
            title: "Confirmación",
            text: "¿Desea guardar el resultado?",
            icon: "info",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Sí"
          }).then((result) => {
            if (result.isConfirmed) {
     
    let res:Resultado = {
      id_resultado:null,
      id_usuario:  this.globalService.usuario.id_usuario,
      categoria:"wais4",
      tipo:"memoria",
      tiempo_total: this.tiempo,
      puntuacion: this.puntuacion,
      fecha:new Date()
      } 
    
     this.resultadosService.setResultado(res).subscribe(() => {
              swal.fire(  'Info',  'Registro guardado',  'success'); });
            }
          });
        }


}
