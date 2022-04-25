import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tasker-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() control: FormControl | AbstractControl;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
