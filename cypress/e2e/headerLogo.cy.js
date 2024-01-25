// <reference types="cypress"/>
import HomePage from "../pageObjects/HomePage";
import urlsData from "../fixtures/urlsData.json";

describe("headerLogo", () => {
  const homePage = new HomePage();

  it("TC_003.001.001 | Header > Logo > Verify Presence of Header with Logo on All Pages", () => {
    const pagesToVisit = urlsData.pagesUrl;
    pagesToVisit.forEach((page) => {
      cy.visit(page);
      homePage
        .getLumaLogo()
        .should("be.visible")
        .find("img")
        .should("have.attr", "src");
    });
  });

  it("TC_003.001.002 | Header > Logo > Verify Redirect to Home Page by Clicking on Logo", () => {
    const pagesToVisit = urlsData.pagesUrl;
    
    pagesToVisit.forEach((page) => {
      cy.visit(page);
      homePage.clickLumaLogo().verifyBaseUrl();
      homePage.getMainContent().should("be.visible");
    });
  });
});
