import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportExporterComponent } from './report-exporter.component';

describe('ReportExporterComponent', () => {
  let component: ReportExporterComponent;
  let fixture: ComponentFixture<ReportExporterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportExporterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportExporterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
