import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardLayoutComponent } from './layouts/dashboard-layout/dashboard-layout.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    DashboardLayoutComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatSelectModule
  ]
})
export class DashboardModule { }
