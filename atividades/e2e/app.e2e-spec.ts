import { Example01Page } from './app.po';

describe('example01 App', function() {
  let page: Example01Page;

  beforeEach(() => {
    page = new Example01Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
