// <reference types="cypress"/>

import WhatIsNewPage from "../pageObjects/WhatIsNewPage";
import whatIsNewPageData from "../fixtures/whatIsNewPageData.json";

describe("whatIsNewPageNewInWomenAndMen", () => {
  const whatIsNewPage = new WhatIsNewPage();

  beforeEach(() => {
    cy.redirectToWhatIsNewPage();
  });

  whatIsNewPageData.whatIsNewSectionName.forEach((sectionName, ind) => {
    it(`TC_006.00${1 + ind}.001 | What’s New page > Verify "${sectionName}" section is visible`, function () {
      whatIsNewPage.chooseWhatIsNewSection(ind).should("be.visible");
      whatIsNewPage
        .chooseWhatIsNewSectionName(ind)
        .should("contain", whatIsNewPageData.whatIsNewSectionName[ind]);
    });
  });
});
