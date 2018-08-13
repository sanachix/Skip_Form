import { Section9Module } from './section9.module';

describe('Section9Module', () => {
  let section9Module: Section9Module;

  beforeEach(() => {
    section9Module = new Section9Module();
  });

  it('should create an instance', () => {
    expect(section9Module).toBeTruthy();
  });
});
