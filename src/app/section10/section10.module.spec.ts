import { Section10Module } from './section10.module';

describe('Section10Module', () => {
  let section10Module: Section10Module;

  beforeEach(() => {
    section10Module = new Section10Module();
  });

  it('should create an instance', () => {
    expect(section10Module).toBeTruthy();
  });
});
