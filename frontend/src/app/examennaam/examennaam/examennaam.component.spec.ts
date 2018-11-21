import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamennaamComponent } from './examennaam.component';

describe('ExamennaamComponent', () => {
  let component: ExamennaamComponent;
  let fixture: ComponentFixture<ExamennaamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamennaamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamennaamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
