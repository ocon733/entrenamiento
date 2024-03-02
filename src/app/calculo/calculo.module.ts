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
import { RestaPageComponent } from './resta-page/resta-page.component';
import { RestaComponent } from './resta/resta.component';
import { MultiPageComponent } from './multi-page/multi-page.component';
import { MultiComponent } from './multi/multi.component';
import { DiviPageComponent } from './division-page/divi-page.component';
import { DiviComponent } from './division/divi.component';
import { SecuenciasComponent } from './secuencias/secuencias.component';
import { SecuenciasPageComponent } from './secuencias-page/secuencias-page.component';
import { RelojComponent } from '../comun/reloj/reloj.component';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [
    SumasPageComponent,
    SumaComponent,
    HomeCalculoComponent,
    RestaPageComponent,
    RestaComponent,
    MultiComponent,
    MultiPageComponent,
    DiviPageComponent,
    DiviComponent,
    SecuenciasComponent,
    SecuenciasPageComponent,
    RelojComponent
    ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatRadioModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule,
    CalculoRoutingModule,
    
  ]
})
export class CalculoModule { }
