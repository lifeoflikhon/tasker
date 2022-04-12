import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'task',
    loadChildren: () => import('./../pages/task-detail/task-detail.module').then(m => m.TaskDetailModule)
  },
  {
    path: '',
    loadChildren: () => import('./../pages/canvas/canvas.module').then(m => m.CanvasModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
