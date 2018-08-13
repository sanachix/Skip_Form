import { Section8Module } from './section8.module';

describe('Section8Module', () => {
  let section8Module: Section8Module;

  beforeEach(() => {
    section8Module = new Section8Module();
  });

  it('should create an instance', () => {
    expect(section8Module).toBeTruthy();
  });
});
