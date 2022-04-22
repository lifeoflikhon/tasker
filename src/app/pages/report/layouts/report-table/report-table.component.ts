import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Task } from '../../../tasks/models';

@Component({
  selector: 'tasker-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  @Input() tasks: Task[];

  @ViewChild('table') table: ElementRef<HTMLTableElement>;

  @Output() edit: EventEmitter<Task> = new EventEmitter<Task>();
  @Output() delete: EventEmitter<Task> = new EventEmitter<Task>();

  constructor() { }

  ngOnInit(): void {
  }

  getTable(): HTMLTableElement {
    return this.table.nativeElement;
  }
}
