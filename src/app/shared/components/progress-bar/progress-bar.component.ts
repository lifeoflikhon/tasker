import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tasker-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent implements OnInit {
  @Input() max: number;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
