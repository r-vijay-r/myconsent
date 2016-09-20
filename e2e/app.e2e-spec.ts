import { MyconsentPage } from './app.po';

describe('myconsent App', function() {
  let page: MyconsentPage;

  beforeEach(() => {
    page = new MyconsentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
