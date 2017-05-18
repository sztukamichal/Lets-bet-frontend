import { LetsBetPage } from './app.po';

describe('lets-bet App', () => {
  let page: LetsBetPage;

  beforeEach(() => {
    page = new LetsBetPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
