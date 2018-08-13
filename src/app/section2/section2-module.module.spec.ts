import { Section2ModuleModule } from './section2-module.module';

describe('Section2ModuleModule', () => {
  let section2ModuleModule: Section2ModuleModule;

  beforeEach(() => {
    section2ModuleModule = new Section2ModuleModule();
  });

  it('should create an instance', () => {
    expect(section2ModuleModule).toBeTruthy();
  });
});
