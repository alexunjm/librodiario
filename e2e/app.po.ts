import { browser, element, by } from 'protractor';

export class LibrodiarioPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ld-root h1')).getText();
  }
}
