import { TestBed } from '@angular/core/testing';

import { CanvartServiceService } from './canvart-service.service';

describe('CanvartServiceService', () => {
  let service: CanvartServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CanvartServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
