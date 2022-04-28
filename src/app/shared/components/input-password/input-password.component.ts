import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tasker-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss']
})
export class InputPasswordComponent implements OnInit {
  @Input() control: any;
  showPassword: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
