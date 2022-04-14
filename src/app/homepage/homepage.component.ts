import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from './models/task.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'tasker-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {}

  addTask() {
    const newTask = new Task();
  }

  deleteTask(task: Task) {}

  updateTask(task: Task) {}

}
