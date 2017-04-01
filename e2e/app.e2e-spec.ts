import { TextAdventurePage } from './app.po';

describe('text-adventure App', () => {
  let page: TextAdventurePage;

  beforeEach(() => {
    page = new TextAdventurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
