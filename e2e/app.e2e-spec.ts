import { Anguar4CheckboxPlaygroundPage } from './app.po';

describe('anguar4-checkbox-playground App', () => {
  let page: Anguar4CheckboxPlaygroundPage;

  beforeEach(() => {
    page = new Anguar4CheckboxPlaygroundPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
