import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamennaamDetailComponent } from './examennaam-detail.component';

describe('ExamennaamDetailComponent', () => {
  let component: ExamennaamDetailComponent;
  let fixture: ComponentFixture<ExamennaamDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamennaamDetailComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamennaamDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
