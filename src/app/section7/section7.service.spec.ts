import { TestBed, inject } from '@angular/core/testing';

import { Section7Service } from './section7.service';

describe('Section7Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section7Service]
    });
  });

  it('should be created', inject([Section7Service], (service: Section7Service) => {
    expect(service).toBeTruthy();
  }));
});
