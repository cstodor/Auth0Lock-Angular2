import { Auth0LockAngular2Page } from './app.po';

describe('auth0-lock-angular2 App', function() {
  let page: Auth0LockAngular2Page;

  beforeEach(() => {
    page = new Auth0LockAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
