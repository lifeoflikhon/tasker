import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Status } from '../../canvas.component';

export class TaskGroup {
  stage: string;
  tasks: Task[];
  isCollapsed: boolean;
}

export class Task {
  id: number;
  title: string;
  projectName: string;
  targetDate: Date;
  isCompleted: boolean;
  isBlocker: boolean;
  estimatedTime: number;
  spentTime: number;
  isPaused: boolean;
}

@Component({
  selector: 'tasker-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() isBlocker: boolean = false;
  @Input() tasks: Task[] = [];

  @Output() onFilter: EventEmitter<Status> = new EventEmitter<Status>();

  Status = Status;
  status: Status = Status.Past;

  constructor() { }

  ngOnInit(): void {
  }

  filterByStatus( status: Status ) {
    this.status = status;
    this.onFilter.emit( status );
  }

  toggleCollapsed() {

  }
}
