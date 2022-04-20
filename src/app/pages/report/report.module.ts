import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { GroupTasksByDatePipe } from './pipes/group-tasks-by-date.pipe';
import { ReportTableComponent } from './layouts/report-table/report-table.component';
import { ReportFilterComponent } from './layouts/report-filter/report-filter.component';
import { ReportExporterComponent } from './layouts/report-exporter/report-exporter.component';


@NgModule({
  declarations: [
    ReportComponent,
    GroupTasksByDatePipe,
    ReportTableComponent,
    ReportFilterComponent,
    ReportExporterComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
  ]
})
export class ReportModule { }
