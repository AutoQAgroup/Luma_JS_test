// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import EcoFriendlyPage from "../pageObjects/EcoFriendlyPage"
import  EcoFriendlyData from "../fixtures/ecoFriendlyData.json"
describe("checkRedirectPage", () => {
  const homePage = new HomePage();
  const ecoFriendlyPage = new EcoFriendlyPage();

  it("TC_001.004.001 | Main page > Search Erin recommends widget > Check Visibility, clickability of Eco-friendly widget", () => {
    homePage
      .getEcoFriendlyLink()
      .should("be.visible");
      homePage
      .clickEcoFriendlyLink();
     ecoFriendlyPage
      .getEcoFriendlyTitle()
      .should("be.visible")
      .and("have.text", EcoFriendlyData.title);
      ecoFriendlyPage
      .getEcoFriendlyLink()
      .should("include", EcoFriendlyData.endpoint);

  });
});
