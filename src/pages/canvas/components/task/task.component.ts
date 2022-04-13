import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tasker-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  paused: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTaskTime() {
    this.paused = !this.paused;
  }
}
