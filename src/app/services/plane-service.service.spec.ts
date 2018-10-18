import { TestBed, inject } from '@angular/core/testing';

import { PlaneServiceService } from './plane-service.service';

describe('PlaneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaneServiceService]
    });
  });

  it('should be created', inject([PlaneServiceService], (service: PlaneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
