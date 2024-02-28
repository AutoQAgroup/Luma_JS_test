// <reference types="cypress"/>

import ProductPage from "../pageObjects/ProductPage";
import ProductPageData from "../fixtures/productPageData.json";

describe("productPageColorChoiceBlock", () => {
  const productPage = new ProductPage();
//   const womanJacketsPage = new WomanJacketsPage();

beforeEach(() => {
    cy.visit(ProductPageData.ExampleUrl);
  });
  
  it("TC_002.013.001 ProductP>Color choice block>“Color” and colored items exist", () => {
    productPage
      .getColorBlock()
      .find('.swatch-attribute-label')
      .should('have.text','Color')
      .and('be.visible');

    productPage
      .getColorBlock()
      .find('.swatch-option.color')
      .should('be.visible')
      .and('not.have.text')
      .and('have.css',"background-color");

      productPage
      .getColorBlock()
      .find('.swatch-option.color')
      .and('have.css',"background-image",'none');
      
       
  });

  it("TC_002.013.002 ProductP>Color choice block>No color repeats", () => {
    productPage
      .getColorItem()
      .should("have.length", 3)
      .then(($els) => {
        const colorCollection = Cypress.$.makeArray($els).map(
          ($el) => $el.style.backgroundColor
        );
        const arr = colorCollection.filter(
          (el) =>
            colorCollection.indexOf(el) === colorCollection.lastIndexOf(el)
        );
        expect(colorCollection).to.be.deep.equal(arr);
      });
  });
});


