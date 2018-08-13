import { Section5Module } from './section5.module';

describe('Section5Module', () => {
  let section5Module: Section5Module;

  beforeEach(() => {
    section5Module = new Section5Module();
  });

  it('should create an instance', () => {
    expect(section5Module).toBeTruthy();
  });
});
