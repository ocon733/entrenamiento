import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomewaisComponent } from './homewais/homewais.component';
import { WaisRoutingModule } from './wais-routing.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button'; 
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { ComprensionComponent } from './comprension/comprension.component';
import { RazonamientoComponent } from './razonamiento/razonamiento.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { VelocidadComponent } from './velocidad/velocidad.component'; 



@NgModule({
  declarations: [
    HomewaisComponent,
    ComprensionComponent,
    RazonamientoComponent,
    MemoriaComponent,
    VelocidadComponent
  ],
  imports: [
    CommonModule,
    WaisRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule
  ]
})
export class WaisModule { }
