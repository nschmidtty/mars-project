import { MarsProjectPage } from './app.po';

describe('mars-project App', () => {
  let page: MarsProjectPage;

  beforeEach(() => {
    page = new MarsProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
