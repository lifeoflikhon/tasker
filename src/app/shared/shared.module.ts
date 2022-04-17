import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextWithIconComponent } from './components/text-with-icon/text-with-icon.component';
import { TaskComponent } from './components/task/task.component';



@NgModule( {
  declarations: [
    TextWithIconComponent,
    TaskComponent
  ],
  exports: [
    TextWithIconComponent,
    TaskComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
