//<reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import homePageData from "../fixtures/homePageData.json";

describe("menPageSelectItemsFromMen", () => {
  const homePage = new HomePage();

  it("TC_008.002.001 | Men Page > Verify 'Men' drop-down menu appears", () => {
    homePage.hoverMenDropDownBtn().getMenDropDownMenu().should("be.visible");
  });

  it("TC_008.002.002 | Men Page > Verify 'Men' drop-down menu contains 'Tops' and 'Bottoms'", () => {
    homePage
      .hoverMenDropDownBtn()
      .getMenDrpoDownMenuItems()
      .should("have.length", homePageData.menDropDownMenuItems.length)
      .then(($els) => {
        const nameofElements = Cypress.$.makeArray($els).map(
          ($el) => $el.innerText
        );
        expect(nameofElements).to.be.deep.equal(
          homePageData.menDropDownMenuItems
        );
      });
  });

  it("TC_008.003.003 |Men Page > Verify that hovering over 'Tops' and 'Bottoms' menu items displays their submenus with clothing sections", () => {
    homePage
      .hoverMenDropDownBtn()
      .hoverMenDropDownTops()
      .getMenDropDownTopsItems()
      .should("have.length", homePageData.menDropDownTopsItems.length)
      .then(($els) => {
        const nameofElements = Cypress.$.makeArray($els).map(
          ($el) => $el.innerText
        );
        expect(nameofElements).to.be.deep.equal(
          homePageData.menDropDownTopsItems
        );
      });

    homePage
      .hoverMenDropDownBtn()
      .hoverMenDropDownBottoms()
      .getMenDropDownBottomsItems()
      .should("have.length", homePageData.menDropDownBottomsItems.length)
      .then(($els) => {
        const nameofElements = Cypress.$.makeArray($els).map(
          ($el) => $el.innerText
        );
        expect(nameofElements).to.be.deep.equal(
          homePageData.menDropDownBottomsItems
        );
      });
  });
});
