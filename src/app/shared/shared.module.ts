import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputUrlComponent } from './components/input-url/input-url.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';



@NgModule({
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputUrlComponent,
    InputSelectComponent,
    InputDateComponent,
    ProgressBarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
