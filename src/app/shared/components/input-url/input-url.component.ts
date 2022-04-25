import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tasker-input-url',
  templateUrl: './input-url.component.html',
  styleUrls: ['./input-url.component.scss']
})
export class InputUrlComponent implements OnInit {
  @Input() control: any;
  @Input() label: string;

  constructor() { }

  ngOnInit(): void {
  }

}
