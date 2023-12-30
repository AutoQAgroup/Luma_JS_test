// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import ProductListPage from "../pageObjects/ProductListPage";

describe("checkProductPagePrice", () => {
    const homePage = new HomePage();
    const productListPage = new ProductListPage();

    beforeEach(() => {
        cy.visit("/");
        homePage
            .hoverWomanMainMenuLink()
            .hoverWomanTopsLink()
            .clickWomanJacketsLink()
    });

    it("check that product price contains $ and a number", () => {
        productListPage
            .clickFirstProductImageLink()
            .getProductPrice()
            .should(($price) => {
                const text = $price.text();
                expect(text).to.contain('$');
                expect(parseFloat(text.replace('$', ''))).to.be.a('number');
              });
              
    });
});
