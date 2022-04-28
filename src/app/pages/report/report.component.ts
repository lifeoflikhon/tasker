import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../tasks/models'
import { dummyTasks } from './data';
import * as FileSaver from 'file-saver';
import { ReportTableComponent } from './layouts/report-table/report-table.component';
import * as html2pdf from 'html2pdf.js';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state';
import { selectAllTasks } from '../../store/selectors';
import { deleteTask, loadTasks } from '../../store/actions';
import * as XLSX from 'xlsx';
import { Router } from '@angular/router';

@Component({
  selector: 'tasker-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  tasks$: Observable<Task[]> = this.store.select(selectAllTasks);
  filteredTasks$: Observable<Task[]>;

  @ViewChild(ReportTableComponent) reportTable: ReportTableComponent;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.store.dispatch(loadTasks());
  }

  saveAsPDF() {
    const table = this.reportTable.getTable();
    html2pdf(table);
  }

  saveAsExcel() {
    const table = this.reportTable.getTable();
    // const dataType = 'application/vnd.ms-excel';
    // const tableHTML = table.outerHTML.replace(/ /g, '%20');
    // const blob = new Blob([tableHTML], { type: dataType });
    // FileSaver.saveAs(blob, 'report.xls');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(table);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
    XLSX.writeFile(wb, 'Tasks.xlsx');
  }

  saveAsJSON() {
    this.tasks$.subscribe(tasks => {
      const blob = new Blob([JSON.stringify(tasks)], { type: 'application/json' });
      FileSaver.saveAs(blob, 'tasks.json');
    }).unsubscribe();
  }

  edit( $event: Task ) {
    this.router.navigate(['/tasks/edit', $event.id]);
  }

  delete( $event: Task ) {
    this.store.dispatch(deleteTask({ id: $event.id }));
  }

  filter( $event: any ) {
    this.filteredTasks$ = null;
    const { fromDate, toDate } = $event;
    const date1 = new Date(fromDate || new Date());
    const date2 = new Date(toDate || new Date());
    this.tasks$.subscribe(tasks => {
      const filteredTasks: Task[] = [];
      tasks.forEach(task => {
        const isAfterFromDate = new Date(task.dueDate) >= date1;
        const isBeforeToDate = new Date(task.dueDate) <= date2;
        if ( isAfterFromDate && isBeforeToDate ) {
          filteredTasks.push(task);
        }
      });
      this.filteredTasks$ = of(filteredTasks);
    });
  }
}
