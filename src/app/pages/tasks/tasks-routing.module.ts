import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks.component';
import { NewTaskComponent } from './views/new-task/new-task.component';
import { TaskDetailsComponent } from './views/task-details/task-details.component';
import { EditTaskComponent } from './views/edit-task/edit-task.component';

const routes: Routes = [
  {
    path: '',
    component: TasksComponent,
    children: [
      {
        path: 'new',
        component: NewTaskComponent
      },
      {
        path: 'edit/:id',
        component: EditTaskComponent
      },
      {
        path: ':id',
        component: TaskDetailsComponent
      },
      {
        path: '',
        redirectTo: 'new',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
