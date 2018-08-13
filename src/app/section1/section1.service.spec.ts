import { TestBed, inject } from '@angular/core/testing';

import { Section1Service } from './section1.service';

describe('Section1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section1Service]
    });
  });

  it('should be created', inject([Section1Service], (service: Section1Service) => {
    expect(service).toBeTruthy();
  }));
});
