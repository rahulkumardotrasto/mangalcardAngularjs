import { MangalcardPage } from './app.po';

describe('mangalcard App', () => {
  let page: MangalcardPage;

  beforeEach(() => {
    page = new MangalcardPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
