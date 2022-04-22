import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SharedModule } from '../../shared/shared.module';
import { TaskComponent } from './layouts/task/task.component';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    DashboardComponent,
    FilterPipe,
    TaskComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    MatMenuModule
  ]
})
export class DashboardModule { }
