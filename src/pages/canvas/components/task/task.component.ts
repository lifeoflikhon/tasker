import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../layout/tasks/tasks.component';

@Component({
  selector: 'tasker-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;

  @Output() onPauseOrPlay: EventEmitter<any> = new EventEmitter();
  @Output() onCompleted: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleTaskTime() {
    this.onPauseOrPlay.emit();
  }

  onCompletedStatusChanged(event: any) {
    const isChecked = event.target.checked;
    this.onCompleted.emit(isChecked);
  }
}
