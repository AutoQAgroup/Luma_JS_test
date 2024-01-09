// <reference types="cypress"/>
import HomePage from "../pageObjects/HomePage";
import urlsData from "../fixtures/urlsData.json";

describe("headerLogo", () => {
  const homePage = new HomePage();

  it("TC_003.001.001 | Header > Logo > Verify Presence of Header with Logo on All Pages", () => {
    homePage.visitPages(urlsData.pagesUrl);
  });

  it("TC_003.001.002 | Header > Logo > Verify Redirect to Home Page by Clicking on Logo", () => {
    homePage.returnHomePage(urlsData.pagesUrl);
  });
});
