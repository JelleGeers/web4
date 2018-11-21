import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExamennaamComponent } from './add-examennaam.component';

describe('AddExamennaamComponent', () => {
  let component: AddExamennaamComponent;
  let fixture: ComponentFixture<AddExamennaamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddExamennaamComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExamennaamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
