import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../../tasks/models';

@Component({
  selector: 'tasker-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() done: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
