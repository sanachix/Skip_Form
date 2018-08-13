import { TestBed, inject } from '@angular/core/testing';

import { Section4Service } from './section4.service';

describe('Section4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section4Service]
    });
  });

  it('should be created', inject([Section4Service], (service: Section4Service) => {
    expect(service).toBeTruthy();
  }));
});
