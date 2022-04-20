import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../tasks/models'
import { dummyTasks } from './data';
import * as FileSaver from 'file-saver';
import { ReportTableComponent } from './layouts/report-table/report-table.component';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'tasker-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  tasks$: Observable<Task[]> = of(dummyTasks);

  @ViewChild(ReportTableComponent) reportTable: ReportTableComponent;

  constructor(
  ) { }

  ngOnInit(): void {
  }

  saveAsPDF() {
    const table = this.reportTable.getTable();
    html2pdf(table);
  }

  saveAsExcel() {
    const table = this.reportTable.getTable();
    const dataType = 'application/vnd.ms-excel';
    const tableHTML = table.outerHTML.replace(/ /g, '%20');
    const blob = new Blob([tableHTML], { type: dataType });
    FileSaver.saveAs(blob, 'report.xls');
  }

  saveAsJSON() {
    const blob = new Blob([JSON.stringify(dummyTasks)], { type: 'application/json' });
    FileSaver.saveAs(blob, 'tasks.json');
  }

}
