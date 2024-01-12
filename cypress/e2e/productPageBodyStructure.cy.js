// <reference types="cypress"/>
import ProductPage from "../pageObjects/ProductPage";
import ProductPageData from "../fixtures/productPageData.json";

describe("productPageBodyStructure", () => {
  const productPage = new ProductPage();

  beforeEach(() => {
    cy.visit(ProductPageData.ExampleUrl);
  });


  it("TC_002.003.001 | Product page > Body Structure> Pictures blok exists.", () => {
    productPage
         .getProductPictures()
         .should("be.visible");
  });

  it("TC_002.003.002 Product page > Body Structure> Main info block exists.", () => {
    productPage
         .getProductMainInfo()
         .should("be.visible");
  });

  it("TC_002.003.003 Item > Product page > Body Structure> Detailed info block exists.", () => {
    productPage
         .getProductDetailedInfo()
         .should("be.visible");
  });

  it("TC_002.003.004 Item >Product page > Body Structure> 'Recomended' block exists.", () => {
    productPage
         .getProductRelated()
         .should("be.visible");
  });
});
