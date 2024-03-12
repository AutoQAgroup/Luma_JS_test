// <reference types="cypress"/>

import ProductPage from "../pageObjects/ProductPage";
import ProductPageData from "../fixtures/productPageData.json";

describe("productPageColorChoiceBlock", () => {
  const productPage = new ProductPage();

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

  it("TC_002.013.003 ProductP>Color choice block>No border by default", () => {
    productPage
      .getContainer()
      .eq(1)
      .children('.swatch-option.color.selected')
      .should('not.exist');
     
     
  });

  it("TC_002.013.004 ProductP>Color choice block>No text near 'Color' by default", () => {
    productPage
      .getColorText()
      .next()
      .should('have.text','');
        
  });

});


