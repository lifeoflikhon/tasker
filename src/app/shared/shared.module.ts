import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextComponent } from './components/input-text/input-text.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputUrlComponent } from './components/input-url/input-url.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { InputDateComponent } from './components/input-date/input-date.component';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ReactiveFormsModule } from '@angular/forms';
import { InputEditorComponent } from './components/input-editor/input-editor.component';



@NgModule( {
  declarations: [
    InputTextComponent,
    InputNumberComponent,
    InputUrlComponent,
    InputSelectComponent,
    InputDateComponent,
    ProgressBarComponent,
    InputEditorComponent
  ],
  exports: [
    ProgressBarComponent,
    InputNumberComponent,
    InputEditorComponent,
    InputTextComponent,
    InputUrlComponent
  ],
  imports: [
    CommonModule,
    MatTooltipModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
