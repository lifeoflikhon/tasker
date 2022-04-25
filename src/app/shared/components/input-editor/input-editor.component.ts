import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tasker-input-editor',
  templateUrl: './input-editor.component.html',
  styleUrls: ['./input-editor.component.scss']
})
export class InputEditorComponent implements OnInit {
  @Input() control: FormControl | AbstractControl;

  constructor() { }

  ngOnInit(): void {
  }

}
