import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tasker-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent implements OnInit {
  @Input() control: any;
  @Input() label: string;
  @Input() placeholder: string = 'starter pack';

  constructor() { }

  ngOnInit(): void {
  }

}
