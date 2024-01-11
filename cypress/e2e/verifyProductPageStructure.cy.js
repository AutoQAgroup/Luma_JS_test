/// <reference types="cypress"/>

import ProductPage from "../pageObjects/ProductPage";
import ProductPageData from "../fixtures/productPageData.json";

describe("verifyProductPageStructure", () => {
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.visit(ProductPageData.ExampleUrl);
  });

  it("TC_002.002.001 | Product page > Self > Verify header of the page", () => {
    productPage
      .getProductPageHeader()
      .should("have.prop", "tagName", ProductPageData.structurePage[0]);
  });
  it("TC_002.002.002 | Product page > Self > Verify navigation section of the page", () => {
    productPage
      .getProductPageNavigation()
      .should("have.class", ProductPageData.structurePage[1]);
  });
  it("TC_002.002.003 | Product page > Self > Verify breadcrumbs of the page", () => {
    productPage
      .getProductPageBreadcrumbs()
      .should("have.class", ProductPageData.structurePage[2]);
  });
  it("TC_002.002.004 | Product page > Self > Verify body of the page", () => {
    productPage
      .getProductPageBody()
      .should("have.prop", "tagName", ProductPageData.structurePage[3]);
  });
  it("TC_002.002.005 | Product page > Self > Verify footer of the page", () => {
    productPage
      .getProductPageFooter()
      .should("have.prop", "tagName", ProductPageData.structurePage[4]);
  });
  it("TC_002.002.006 | Product page > Self > Verify copyright of the page", () => {
    productPage
      .getProductPageCopyright()
      .should("have.class", ProductPageData.structurePage[5]);
  });
});
