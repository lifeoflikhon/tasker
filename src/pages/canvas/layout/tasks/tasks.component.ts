import { Component, Input, OnInit } from '@angular/core';
import { Status } from '../../canvas.component';

@Component({
  selector: 'tasker-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() isBlocker: boolean = false;
  Status = Status;
  status: Status = Status.Past;

  constructor() { }

  ngOnInit(): void {
  }

  filterByStatus( status: Status ) {
    this.status = status;
  }

  toggleCollapsed() {

  }
}
