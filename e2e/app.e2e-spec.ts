import { LibrodiarioPage } from './app.po';

describe('librodiario App', () => {
  let page: LibrodiarioPage;

  beforeEach(() => {
    page = new LibrodiarioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ld works!');
  });
});
