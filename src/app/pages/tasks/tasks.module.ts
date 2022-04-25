import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './views/new-task/new-task.component';
import { TaskDetailsComponent } from './views/task-details/task-details.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule( {
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskDetailsComponent
  ],
  exports: [
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule
  ]
})
export class TasksModule { }
