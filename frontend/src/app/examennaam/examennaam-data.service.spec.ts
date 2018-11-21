import { TestBed, inject } from '@angular/core/testing';

import { ExamennaamDataService } from './examennaam-data.service';

describe('ExamennaamDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExamennaamDataService]
    });
  });

  it('should be created', inject([ExamennaamDataService], (service: ExamennaamDataService) => {
    expect(service).toBeTruthy();
  }));
});
