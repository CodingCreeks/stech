import { SharavathiTechnologiesPage } from './app.po';

describe('sharavathi-technologies App', () => {
  let page: SharavathiTechnologiesPage;

  beforeEach(() => {
    page = new SharavathiTechnologiesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
