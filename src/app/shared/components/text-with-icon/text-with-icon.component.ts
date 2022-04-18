import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'tasker-text-with-icon',
  templateUrl: './text-with-icon.component.html',
  styleUrls: ['./text-with-icon.component.scss']
})
export class TextWithIconComponent implements OnInit {
  @Input() label: string = '';
  @Input() iconName: string = 'folder';
  @Input() altIcon: string;
  @Input() link: string;

  constructor() { }

  ngOnInit(): void {
  }

}
