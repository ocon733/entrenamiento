import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCalculoComponent } from './home-calculo/home-calculo.component';
import { SumasPageComponent } from './sumas-page/sumas-page.component';
import { RestaPageComponent } from './resta-page/resta-page.component';
import { MultiPageComponent } from './multi-page/multi-page.component';
import { DiviPageComponent } from './division-page/divi-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeCalculoComponent,
    children: [
      { path: 'sumas', component: SumasPageComponent},
      { path: 'restas', component: RestaPageComponent},
      { path: 'division', component: DiviPageComponent},
      { path: 'multi', component: MultiPageComponent}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculoRoutingModule { }
