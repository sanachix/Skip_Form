import { TestBed, inject } from '@angular/core/testing';

import { Section10Service } from './section10.service';

describe('Section10Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section10Service]
    });
  });

  it('should be created', inject([Section10Service], (service: Section10Service) => {
    expect(service).toBeTruthy();
  }));
});
