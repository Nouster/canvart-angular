import { TestBed } from '@angular/core/testing';

import { CrytpoCompareService } from './crytpo-compare.service';

describe('CrytpoCompareService', () => {
  let service: CrytpoCompareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrytpoCompareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
