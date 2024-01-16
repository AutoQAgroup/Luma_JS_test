// <reference types="cypress"/>

import WhatIsNewPage from "../pageObjects/WhatIsNewPage";
import whatIsNewPageData from "../fixtures/whatIsNewPageData.json";

describe("whatIsNewPage", () => {
  const whatIsNewPage = new WhatIsNewPage();

  beforeEach(() => {
    cy.redirectToWhatIsNewPage();
  });

  whatIsNewPageData.whatIsNewWidgetName.forEach((widgetName, ind) => {
    it(`TC_006.003-004-005.001 | What’s New page > Verify "${widgetName}" widget is clickable`, function () {
      whatIsNewPage
        .clickWhatIsNewWidgetBlock(ind)
        .verifyWhatIsNewWidgetEndPoint(
          whatIsNewPageData.whatIsNewWidgetEndPoint[ind]
        );
      whatIsNewPage.verifyWhatIsNewWidgetHeader(
        whatIsNewPageData.headersWhatIsNewWidgetPages[ind]
      );
    });
  });
});