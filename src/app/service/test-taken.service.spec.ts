import { TestBed } from '@angular/core/testing';

import { TestTakenService } from './test-taken.service';

describe('TestTakenService', () => {
  let service: TestTakenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestTakenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
