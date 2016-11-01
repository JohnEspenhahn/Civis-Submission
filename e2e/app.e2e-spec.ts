import { SubmissionPage } from './app.po';

describe('submission App', function() {
  let page: SubmissionPage;

  beforeEach(() => {
    page = new SubmissionPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
