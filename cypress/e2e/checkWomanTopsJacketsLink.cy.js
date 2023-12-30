// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import pageTitle from "../fixtures/jacketsPageData.json"
import WomanJacketsPage from "../pageObjects/WomanJacketsPage";

describe("checkWomanTopsJacketsLink", () => {
  const homePage = new HomePage();
  const womanJacketsPage = new WomanJacketsPage();
  
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC0001_Check the link for Woman/Tops/Jackets", () => {
    homePage
      .hoverWomanMainMenuLink()
      .hoverWomanTopsLink()
      .clickWomanJacketsLink()
    womanJacketsPage
      .getJacketsTitle()
      .should("be.visible")
      .and("have.text", pageTitle.pageTitle);

  });
});
