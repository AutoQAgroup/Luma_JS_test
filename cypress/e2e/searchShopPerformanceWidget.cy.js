// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import homePageData from "../fixtures/homePageData.json";
import PerformanceFabricsPage from "../pageObjects/PerformanceFabricsPage";
import performanceFabricsPageData from "../fixtures/performanceFabricsPageData.json";

describe("searchShopPerformanceWidget", () => {
  const homePage = new HomePage();
  const performanceFabricsPage = new PerformanceFabricsPage();

  it('TC_001.003.001 | Main page > Search Shop Performance widget > Verify "Shop Performance widget" visibility and clickability', () => {
    homePage.getShopPerformanceWidget().should("be.visible");
    homePage
      .getShopPerformanceWidgetText()
      .should("have.text", homePageData.actionIcons[3]);
    homePage
      .clickShopPerformanceWidget()
      .getPerformanceFabricsPageUrl()
      .should(
        "contain",
        performanceFabricsPageData.performanceFabricsPageEndpoint
      );
    performanceFabricsPage
      .getPerformanceFabricsPageTitle()
      .should("be.visible")
      .and("contain", performanceFabricsPageData.pageTitle);
  });
});
