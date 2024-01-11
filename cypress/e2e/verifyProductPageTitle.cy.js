// <reference types="cypress"/>

import ProductPage from "../pageObjects/ProductPage";
import ProductPageData from "../fixtures/ProductPageData.json";

describe("verifyProductPageTitle", ()=>{
    const productPage = new ProductPage();

    beforeEach(()=>{
        cy.visit(ProductPageData.ExampleUrl);
    });

    it("TC_002.001.001 | Product page > Self > Verify title", ()=>{
productPage
.getProductPageTitle()
.should("eql", ProductPageData.titlePage);
    });
});


