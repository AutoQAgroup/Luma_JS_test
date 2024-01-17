// <reference types="cypress"/>

import WhatIsNewPage from "../pageObjects/WhatIsNewPage";
import whatIsNewPageData from "../fixtures/whatIsNewPageData.json";

describe("whatIsNewPage", () => {
  const whatIsNewPage = new WhatIsNewPage();

  beforeEach(() => {
    cy.redirectToWhatIsNewPage();
  });

  whatIsNewPageData.whatIsNewWidgetName.forEach((widgetName, ind) => {
    it(`TC_006.00${3+ind}.001 | What’s New page > Verify "${widgetName}" widget is clickable`, function () {
      whatIsNewPage
        .clickWhatIsNewWidgetBlock(ind)
        .verifyWhatIsNewWidgetEndPoint(
          whatIsNewPageData.whatIsNewWidgetEndPoint[ind]
        );
      whatIsNewPage
        .getWhatIsNewWidgetsPageHeader()
        .should("be.visible")
        .and("contain", whatIsNewPageData.headersWhatIsNewWidgetPages[ind]);
    });
  });

  whatIsNewPageData.whatIsNewWidgetName.forEach((widgetName, ind) => {
    it(`TC_006.00${3 + ind}.002 | What’s New page > Verify "${widgetName}" widget is visible and have text`, function () {
      whatIsNewPage
        .chooseWhatIsNewWidgetContent(ind)
        .should("be.visible")
        .and("contain", whatIsNewPageData.whatIsNewWidgetText[ind]);
    });
  });
});
