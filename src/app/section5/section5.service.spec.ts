import { TestBed, inject } from '@angular/core/testing';

import { Section5Service } from './section5.service';

describe('Section5Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section5Service]
    });
  });

  it('should be created', inject([Section5Service], (service: Section5Service) => {
    expect(service).toBeTruthy();
  }));
});
