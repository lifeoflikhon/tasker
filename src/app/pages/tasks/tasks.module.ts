import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './views/new-task/new-task.component';
import { TaskDetailsComponent } from './views/task-details/task-details.component';


@NgModule({
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskDetailsComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule
  ]
})
export class TasksModule { }
