import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Component({
  selector: 'tasker-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent implements OnInit {
  @Input() options: any[] = [];
  @Input() control: any;
  @Input() label: string;
  @Output() selected: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.control.valueChanges
      .subscribe(value => {
        const item = this.options.find(option => option.id === value);
        this.selected.emit(item);
      });
  }

}
