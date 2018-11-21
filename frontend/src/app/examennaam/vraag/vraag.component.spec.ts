import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VraagComponent } from './vraag.component';

describe('VraagComponent', () => {
  let component: VraagComponent;
  let fixture: ComponentFixture<VraagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VraagComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VraagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
