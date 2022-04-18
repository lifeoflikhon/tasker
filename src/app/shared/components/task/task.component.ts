import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../entities';

@Component({
  selector: 'tasker-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() start: EventEmitter<any> = new EventEmitter<any>();
  @Output() stop: EventEmitter<any> = new EventEmitter<any>();
  @Output() view: EventEmitter<any> = new EventEmitter<any>();
  @Output() block: EventEmitter<any> = new EventEmitter<any>();
  @Output() unblock: EventEmitter<any> = new EventEmitter<any>();
  @Output() delete: EventEmitter<any> = new EventEmitter<any>();
  @Output() duplicate: EventEmitter<any> = new EventEmitter<any>();
  @Output() inactive: EventEmitter<any> = new EventEmitter<any>();
  @Output() active: EventEmitter<any> = new EventEmitter<any>();
  @Output() complete: EventEmitter<any> = new EventEmitter<any>();
  @Output() inComplete: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  check( $event: any ) {
    const isChecked = $event.target.checked;

    if (isChecked) {
      this.complete.emit();
    } else {
      this.inComplete.emit();
    }
  }
}
