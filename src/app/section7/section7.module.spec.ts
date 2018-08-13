import { Section7Module } from './section7.module';

describe('Section7Module', () => {
  let section7Module: Section7Module;

  beforeEach(() => {
    section7Module = new Section7Module();
  });

  it('should create an instance', () => {
    expect(section7Module).toBeTruthy();
  });
});
