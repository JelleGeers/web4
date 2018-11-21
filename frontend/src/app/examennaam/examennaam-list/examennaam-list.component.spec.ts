import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamennaamListComponent } from './examennaam-list.component';

describe('ExamennaamListComponent', () => {
  let component: ExamennaamListComponent;
  let fixture: ComponentFixture<ExamennaamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExamennaamListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamennaamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
