import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SumasPageComponent } from './sumas-page/sumas-page.component';
import { SumaComponent } from './suma/suma.component';
import {MatButtonModule} from '@angular/material/button'; 
import {MatRadioModule} from '@angular/material/radio'; 
import {MatCardModule} from '@angular/material/card';
import { HomeCalculoComponent } from './home-calculo/home-calculo.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { CalculoRoutingModule } from './calculo-routing.module';

@NgModule({
  declarations: [
    SumasPageComponent,
    SumaComponent,
    HomeCalculoComponent  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    CalculoRoutingModule
    
  ]
})
export class CalculoModule { }
