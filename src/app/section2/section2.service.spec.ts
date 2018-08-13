import { TestBed, inject } from '@angular/core/testing';

import { Section2Service } from './section2.service';

describe('Section2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section2Service]
    });
  });

  it('should be created', inject([Section2Service], (service: Section2Service) => {
    expect(service).toBeTruthy();
  }));
});
