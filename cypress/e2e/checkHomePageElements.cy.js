// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import homePageData from "../fixtures/homePageData.json"
describe("checkMainPageTitleAndLogo", () => {
  const homePage = new HomePage();

  it("TC_001.001.001 | Main page > Self > Check Title visibility", () => {
    homePage
      .getHomePageLogo()
      .should("be.visible")
      .and("have.class", homePageData.attribute);
      homePage
      .getTitleName()
      .should("be.visible")
      .and("have.attr", "src")
      .and("include", homePageData.title );
  });

  it("TC_001.001.002 | Main page > Self > Check image boxes visibility", () => {
    // homePage
    // .getImageBoxButton()
    // .should("be.visible")
    // .and("have.text",homePageData.actionButton);
    homePage
    .getImageBoxesLinks()
    .should("be.visible")
    .then(($els) => {
            const textArray = Cypress.$.makeArray($els).map($el =>$el.innerText)
            return textArray;
        })
    .should("have.length",homePageData.actionIcons.length)
    .and("deep.equal",homePageData.actionIcons);
});
});

