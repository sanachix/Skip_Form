import { TestBed, inject } from '@angular/core/testing';

import { Section8Service } from './section8.service';

describe('Section8Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Section8Service]
    });
  });

  it('should be created', inject([Section8Service], (service: Section8Service) => {
    expect(service).toBeTruthy();
  }));
});
