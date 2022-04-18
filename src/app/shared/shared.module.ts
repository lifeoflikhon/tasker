import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextWithIconComponent } from './components/text-with-icon/text-with-icon.component';
import { TaskComponent } from './components/task/task.component';
import { GetBlockerPipe } from './pipes/get-blocker.pipe';
import { GetNonBlockerPipe } from './pipes/get-non-blocker.pipe';
import { GetIncompletedPipe } from './pipes/get-incompleted.pipe';
import { GetCompletedPipe } from './pipes/get-completed.pipe';
import { MatMenuModule } from '@angular/material/menu';
import { NewTaskComponent } from './components/new-task/new-task.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule( {
  declarations: [
    TextWithIconComponent,
    TaskComponent,
    GetBlockerPipe,
    GetNonBlockerPipe,
    GetIncompletedPipe,
    GetCompletedPipe,
    NewTaskComponent
  ],
  exports: [
    TextWithIconComponent,
    TaskComponent,
    GetNonBlockerPipe,
    GetBlockerPipe,
    GetIncompletedPipe,
    GetCompletedPipe,
    NewTaskComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatMenuModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
