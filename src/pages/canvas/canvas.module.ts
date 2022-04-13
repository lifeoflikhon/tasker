import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CanvasRoutingModule } from './canvas-routing.module';
import { CanvasComponent } from './canvas.component';
import { LeftNavbarComponent } from './layout/left-navbar/left-navbar.component';
import { TopNavbarComponent } from './layout/top-navbar/top-navbar.component';
import { WallComponent } from './layout/wall/wall.component';
import { TasksComponent } from './layout/tasks/tasks.component';
import { TaskComponent } from './components/task/task.component';
import { MatMenuModule } from '@angular/material/menu';
import { GenerateTaskGroupsPipe } from './pipes/generate-task-groups.pipe';


@NgModule({
  declarations: [
    CanvasComponent,
    LeftNavbarComponent,
    TopNavbarComponent,
    WallComponent,
    TasksComponent,
    TaskComponent,
    GenerateTaskGroupsPipe,
  ],
  imports: [
    CommonModule,
    CanvasRoutingModule,
    MatMenuModule
  ]
})
export class CanvasModule { }
