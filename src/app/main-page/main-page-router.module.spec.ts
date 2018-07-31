import { MainPageRouterModule } from './main-page-router.module';

describe('MainPageRouterModule', () => {
  let mainPageRouterModule: MainPageRouterModule;

  beforeEach(() => {
    mainPageRouterModule = new MainPageRouterModule();
  });

  it('should create an instance', () => {
    expect(mainPageRouterModule).toBeTruthy();
  });
});
