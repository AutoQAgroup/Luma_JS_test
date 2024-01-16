// <reference types="cypress"/>
import ProductPage from "../pageObjects/ProductPage";
import productPageData from "../fixtures/productPageData.json";

describe("productPageMainInfoName", () => {
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.visit(productPageData.ExampleUrl);
  });

  it("TC_002.008.001 | Product page > Main info -Name>Product name equals End point.", () => {
    productPage
        .getProductName()
        .should('be.visible');
    productPage
        .compareNameAndEndPoint();
  });
})