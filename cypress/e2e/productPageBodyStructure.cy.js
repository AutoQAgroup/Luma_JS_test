// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import priceTag from "../fixtures/ProductPageData.json";
import ProductPageData from "../fixtures/ProductPageData.json";

describe("productPageBodyStructure", () => {
  const homePage = new HomePage();
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.visit(ProductPageData.ExampleUrl);
  });


  it("TC_002.003.001 | Product page > Body Structure> Pictures blok exists.", () => {
    productPage
         .getProductMainInfo()
         .should("be.visible");
  });

  it("TC_002.003.002 Product page > Body Structure> Main info block exists.", () => {
    productPage
         .getProductMainInfo()
         .should("be.visible");
  });

  it("TC_002.003.003 Item > Product page > Body Structure> Detailed info block exists.", () => {
    productPage
         .getProductData()
         .should("be.visible");
  });

  it("TC_002.003.004 Item >Product page > Body Structure> ‘Recomended' block exists.", () => {
    productPage
         .getProductRelated()
         .should("be.visible");
  });
});
