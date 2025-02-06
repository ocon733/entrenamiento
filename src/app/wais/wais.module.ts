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
import { SimbolosComponent } from './velocidad/simbolos/simbolos.component';
import { ComunModule } from '../comun.module';
import { BalanzasComponent } from './balanzas/balanzas.component';
import { PlatillosComponent } from './balanzas/platillos/platillos.component';
import { RespuestasComponent } from './balanzas/respuestas/respuestas.component';

@NgModule({
  declarations: [
    HomewaisComponent,
    ComprensionComponent,
    RazonamientoComponent,
    MemoriaComponent,
    VelocidadComponent,
    SimbolosComponent,
    BalanzasComponent,
    PlatillosComponent,
    RespuestasComponent
  ],
  imports: [
    CommonModule,
    WaisRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    ComunModule
  ]
})
export class WaisModule { }
