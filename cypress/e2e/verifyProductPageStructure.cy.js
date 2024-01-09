/// <reference types="cypress"/>

import ProductPage from "../pageObjects/ProductPage";
import ProductPageData from "../fixtures/productPageData.json";

describe("verifyProductPageStructure", () => {
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.visit(ProductPageData.ExampleUrl);
  });

  it("TC_002.002.001 | Product page > Self > Verify Structure", () => {
    productPage
    .getProductPageHeader()
    .should('have.prop', 'tagName',ProductPageData.structurePage[0]);
    productPage
    .getProductPageNavigation()
    .should('have.class', ProductPageData.structurePage[1]);
    productPage
    .getProductPageBreadcrumbs()
    .should('have.class', ProductPageData.structurePage[2]);
    productPage
    .getProductPageBody()
    .should('have.prop', 'tagName', ProductPageData.structurePage[3]);
    productPage
    .getProductPageFooter()
    .should('have.prop', 'tagName', ProductPageData.structurePage[4]);
    productPage
    .getProductPageCopyright()
    .should('have.class', ProductPageData.structurePage[5]);
  });
});