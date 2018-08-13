import { TestBed, inject } from '@angular/core/testing';

import { Section6Service } from './section6.service';

describe('Section6Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section6Service]
    });
  });

  it('should be created', inject([Section6Service], (service: Section6Service) => {
    expect(service).toBeTruthy();
  }));
});
