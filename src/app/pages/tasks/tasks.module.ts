import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './views/new-task/new-task.component';
import { TaskDetailsComponent } from './views/task-details/task-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { EditTaskComponent } from './views/edit-task/edit-task.component';


@NgModule( {
  declarations: [
    TasksComponent,
    NewTaskComponent,
    TaskDetailsComponent,
    EditTaskComponent
  ],
  exports: [
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class TasksModule { }
