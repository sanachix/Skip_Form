import { Section1Module } from './section1.module';

describe('Section1Module', () => {
  let section1Module: Section1Module;

  beforeEach(() => {
    section1Module = new Section1Module();
  });

  it('should create an instance', () => {
    expect(section1Module).toBeTruthy();
  });
});
