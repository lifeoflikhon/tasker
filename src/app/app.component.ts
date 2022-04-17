import { Component } from '@angular/core';
import { Task } from './entities';

@Component({
  selector: 'tasker-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  task: Task = {
    title: 'Test 1',
    estimatedTime: 1,
    spentTime: 0,
    isCompleted: false,
    isBlocker: true
  };
}
