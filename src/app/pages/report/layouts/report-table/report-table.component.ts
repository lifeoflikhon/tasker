import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Task } from '../../../tasks/models';

@Component({
  selector: 'tasker-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  @Input() tasks: Task[];

  @ViewChild('table') table: ElementRef<HTMLTableElement>;

  constructor() { }

  ngOnInit(): void {
  }

  getTable(): HTMLTableElement {
    return this.table.nativeElement;
  }
}
