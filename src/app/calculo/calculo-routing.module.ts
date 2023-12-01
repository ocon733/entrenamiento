import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeCalculoComponent } from './home-calculo/home-calculo.component';
import { SumasPageComponent } from './sumas-page/sumas-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomeCalculoComponent,
    children: [
      { path: 'sumas', component: SumasPageComponent}
     

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CalculoRoutingModule { }
