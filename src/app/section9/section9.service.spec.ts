import { TestBed, inject } from '@angular/core/testing';

import { Section9Service } from './section9.service';

describe('Section9Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section9Service]
    });
  });

  it('should be created', inject([Section9Service], (service: Section9Service) => {
    expect(service).toBeTruthy();
  }));
});
