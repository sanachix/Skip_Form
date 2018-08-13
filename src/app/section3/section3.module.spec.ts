import { Section3Module } from './section3.module';

describe('Section3Module', () => {
  let section3Module: Section3Module;

  beforeEach(() => {
    section3Module = new Section3Module();
  });

  it('should create an instance', () => {
    expect(section3Module).toBeTruthy();
  });
});
