import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PalabrasService } from '../services/palabras.service';
import { Resultado } from 'src/app/calculo/interfaces/resultado.interface';
import { GlobalService } from 'src/app/comun/global.service';
import { ResultadosService } from 'src/app/comun/resultados.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-comprension',
  templateUrl: './comprension.component.html',
  styleUrls: ['./comprension.component.css']
})
export class ComprensionComponent implements OnInit{

  semejanzasForm!: FormGroup;
  tiempo:number = 0;
  reloj:string = "00:00";
  timer:any;
  terminado:boolean=false;

  ngOnInit(): void {
    this.semejanzasForm = this.formBuilder.group(
      {
      semejanza1:[""],
      semejanza2:[""],
      puntuacion:[""]
      });
  }

  constructor( private formBuilder:FormBuilder, 
    private palabraService:PalabrasService,
    private globalService:GlobalService,
    private resultadosService:ResultadosService) {}

 

  generar(){

    this.terminado = false;
    let id_palabra1:number = Math.round(Math.random() * 55092); 
    this.palabraService.getPalabra(id_palabra1).subscribe((palabra) => this.semejanzasForm.controls["semejanza2"].setValue(JSON.parse(palabra[0]).palabra) )

    let id_palabra2 = Math.round(Math.random() * 55092); 
    this.palabraService.getPalabra(id_palabra2).subscribe((palabra) =>  this.semejanzasForm.controls["semejanza1"].setValue(JSON.parse(palabra[0]).palabra) )


    this.timer = setInterval( () => {
      this.contador();
    }, 1000 );

  }

  finalizar(){
    clearInterval(this.timer);
    this.terminado = true;
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
      tipo:"semejanzas",
      tiempo_total: this.tiempo,
      puntuacion: this.semejanzasForm.controls["puntuacion"].value,
      fecha:new Date()
      } 

      this.resultadosService.setResultado(res).subscribe(() => {
                swal.fire(  'Info',  'Registro guardado',  'success'); });
              }
            });
  }


  


}
