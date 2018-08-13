import { Section4Module } from './section4.module';

describe('Section4Module', () => {
  let section4Module: Section4Module;

  beforeEach(() => {
    section4Module = new Section4Module();
  });

  it('should create an instance', () => {
    expect(section4Module).toBeTruthy();
  });
});
