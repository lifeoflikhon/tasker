import { Component, Input, OnInit } from '@angular/core';
import { Task } from '../../../tasks/models';

@Component({
  selector: 'tasker-report-table',
  templateUrl: './report-table.component.html',
  styleUrls: ['./report-table.component.scss']
})
export class ReportTableComponent implements OnInit {
  @Input() tasks: Task[];

  constructor() { }

  ngOnInit(): void {
  }

}
