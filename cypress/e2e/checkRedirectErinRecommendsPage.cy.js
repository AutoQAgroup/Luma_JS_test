// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import ErinRecommendsPage from "../pageObjects/ErinRecommendsPage"
import ErinRecommendsData from "../fixtures/erinRecommendsData.json"
describe("checkRedirectPage", () => {
  const homePage = new HomePage();
  const erinRecommendsPage = new ErinRecommendsPage();

  it("TC_001.002.001 | Main page > Search Erin recommends widget > Check Visibility, clickability of Erin recommends widget", () => {
    homePage
      .getErinRecommendsLink()
      .should("be.visible");
      homePage
      .clickErinRecommendsLink();
      erinRecommendsPage
      .getErinRecommendsTitle()
      .should("be.visible")
      .and("have.text", ErinRecommendsData.title);
      erinRecommendsPage
      .getErinRecommendsLink()
      .should("include", ErinRecommendsData.endpoint);

  });
});
