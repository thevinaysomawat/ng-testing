import { TestBed } from '@angular/core/testing';

import { UnittestingService } from './unittesting.service';

describe('UnittestingService', () => {
  let service: UnittestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnittestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
