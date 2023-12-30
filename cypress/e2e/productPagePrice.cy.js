// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import priceTag from "../fixtures/ProductPage.json";


describe("checkProductPagePrice", () => {
    const homePage = new HomePage();
    const productPage = new ProductPage();

    beforeEach(() => {
        cy.visit("/");
        homePage
            .hoverWomanMainMenuLink()
            .hoverWomanTopsLink()
            .clickWomanJacketsLink()
            .clickFirstProductImageLink()
    });

    it("check that product price contains $ and a number", () => {
        productPage
            .getProductPrice()
            .should(($price) => {
                const text = $price.text();
                expect(text).to.contain('$');
                expect(parseFloat(text.replace('$', ''))).to.be.a('number');
            });

    });

    it("check label above price", () => {
        productPage
            .getProductPriceLabel()
            .should('have.text', priceTag.priceTag)

    })
});
