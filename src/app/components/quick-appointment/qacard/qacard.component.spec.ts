import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QACardComponent } from './qacard.component';

describe('QACardComponent', () => {
  let component: QACardComponent;
  let fixture: ComponentFixture<QACardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QACardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QACardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
