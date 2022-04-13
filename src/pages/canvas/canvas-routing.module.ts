import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CanvasComponent, Status } from './canvas.component';

const routes: Routes = [
  {
    path: ':status',
    component: CanvasComponent
  },
  {
    path: '',
    redirectTo: Status.Past
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CanvasRoutingModule { }
