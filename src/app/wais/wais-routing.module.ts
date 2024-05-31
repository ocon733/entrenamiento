import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomewaisComponent } from './homewais/homewais.component';
import { ComprensionComponent } from './comprension/comprension.component';
import { RazonamientoComponent } from './razonamiento/razonamiento.component';
import { VelocidadComponent } from './velocidad/velocidad.component';
import { MemoriaComponent } from './memoria/memoria.component';
import { BalanzasComponent } from './balanzas/balanzas.component';


const routes: Routes = [
  {
    path: '',
    component: HomewaisComponent,
    children: [
      { path: 'comprension', component:ComprensionComponent},
      { path: 'razonamiento', component: RazonamientoComponent},
      { path: 'memoria', component:MemoriaComponent},
      { path: 'velocidad', component: VelocidadComponent},
      { path: 'balanzas', component: BalanzasComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WaisRoutingModule { }
