import { TestBed, inject } from '@angular/core/testing';

import { Section3Service } from './section3.service';

describe('Section3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section3Service]
    });
  });

  it('should be created', inject([Section3Service], (service: Section3Service) => {
    expect(service).toBeTruthy();
  }));
});
