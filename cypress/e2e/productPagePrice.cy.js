// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import ProductPage from "../pageObjects/ProductPage";
import {priceTag, pdpUrls } from "../fixtures/productPageData.json";


describe("productPagePrice", () => {
    const productPage = new ProductPage();
    const homePage = new HomePage();

    beforeEach(() => {
        homePage
        .visitRandomPDPFromArrayUrl(pdpUrls)
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
            .should('have.text', priceTag)

    })
});
