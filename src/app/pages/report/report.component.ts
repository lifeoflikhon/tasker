import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../tasks/models'
import { dummyTasks } from './data';

@Component({
  selector: 'tasker-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  tasks$: Observable<Task[]> = of(dummyTasks);

  constructor() { }

  ngOnInit(): void {
  }

}
