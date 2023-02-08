import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumasPageComponent } from './sumas-page/sumas-page.component';
import { SumaComponent } from './suma/suma.component';



@NgModule({
  declarations: [
    SumasPageComponent,
    SumaComponent
  ],
  exports:[
     SumasPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CalculoModule { }
