// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import pageTitle from "../fixtures/jacketsPageData.json"

describe("checkWomanTopsJacketsLink", () => {
  const homePage = new HomePage();
  
  it("TC0001_Check the link for Woman/Tops/Jackets", () => {
    homePage
      .hoverWomanMainMenuLink()
      .hoverWomanTopsLink()
      .clickWomanJacketsLink()
      .getJacketsTitle()
      .should("be.visible")
      .and("have.text", pageTitle.pageTitle);

  });
});
