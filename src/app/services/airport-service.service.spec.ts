import { TestBed, inject } from '@angular/core/testing';

import { AirportServiceService } from './airport-service.service';

describe('AirportServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirportServiceService]
    });
  });

  it('should be created', inject([AirportServiceService], (service: AirportServiceService) => {
    expect(service).toBeTruthy();
  }));
});
