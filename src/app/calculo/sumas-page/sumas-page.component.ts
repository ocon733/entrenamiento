import { Component } from '@angular/core';

@Component({
  selector: 'app-sumas-page',
  templateUrl: './sumas-page.component.html',
  styleUrls: ['./sumas-page.component.css']
})
export class SumasPageComponent {
  iniciado:boolean = false;

  iniciar(){
    this.iniciado = true;
  }
  
}
