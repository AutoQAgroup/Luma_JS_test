//<reference types="cypress"/>
import HomePage from "../pageObjects/HomePage";
import urlsData from "../fixtures/urlsData.json";

describe("headerSearchBar", () => {
    const homePage = new HomePage();

    it('TC_003.002.001 | Header > Search bar>Visibility on almost all the pages of the website', () => {
        homePage.visitPagesSearchBar(urlsData.pagesUrl);
    });

})