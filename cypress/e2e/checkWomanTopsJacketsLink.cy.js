// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";

describe("checkWomanTopsJacketsLink", () => {
  const homePage = new HomePage();
  
  beforeEach(() => {
    cy.visit("https://magento.softwaretestingboard.com/");
  });

  it("TC0001_Check the link for Woman/Tops/Jackets", () => {
    homePage
      .hoverWomanMainMenuLink()
      .hoverWomanTopsLink()
      .clickWomanJacketsLink()
      .getJacketsTitle()
      .should("be.visible")
      .and("have.text", "Jackets");

    //cy.get("#ui-id-4").trigger('mouseover');
  });
});
