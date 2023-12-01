import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button'; 
import { PerfilService } from './servicios/perfil.service';
import {HttpClientModule} from '@angular/common/http';
import {MatInputModule} from '@angular/material/input';
import { CalculoModule } from './calculo/calculo.module';
import { CabeceraComponent } from './comun/cabecera/cabecera.component';
import {MatToolbarModule} from '@angular/material/toolbar'; 

@NgModule({
  declarations: [
    AppComponent,
    CabeceraComponent
  ],
 
  imports: [
    BrowserModule,
    AppRoutingModule,
    CalculoModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [PerfilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
