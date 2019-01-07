import { justcleanPage } from './app.po';

describe('justclean App', () => {
  let page: MePage;

  beforeEach(() => {
    page = new justcleanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
