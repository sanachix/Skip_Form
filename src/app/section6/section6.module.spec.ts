import { Section6Module } from './section6.module';

describe('Section6Module', () => {
  let section6Module: Section6Module;

  beforeEach(() => {
    section6Module = new Section6Module();
  });

  it('should create an instance', () => {
    expect(section6Module).toBeTruthy();
  });
});
