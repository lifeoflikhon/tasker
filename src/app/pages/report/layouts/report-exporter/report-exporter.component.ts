import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'tasker-report-exporter',
  templateUrl: './report-exporter.component.html',
  styleUrls: ['./report-exporter.component.scss']
})
export class ReportExporterComponent implements OnInit {
  @Output() json: EventEmitter<any> = new EventEmitter<any>();
  @Output() excel: EventEmitter<any> = new EventEmitter<any>();
  @Output() pdf: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

}
