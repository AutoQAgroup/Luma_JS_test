// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import SearchResultPage from "../pageObjects/SearchResultPage";
import {queries, SRPContent} from "../fixtures/searchResultPageData.json";

describe("searchPageResults", () => {
    const homePage = new HomePage();
    const searchResultPage = new SearchResultPage();


    it("check title on SRP", () => {
        homePage
            .performSearch(queries.noResultQuery)
            .getSRPtitle()
            .should('have.text', `${SRPContent.title} '${queries.noResultQuery}'`)
            });


    it("check 'No results' on SRP", () => {
        homePage
            .performSearch(queries.noResultQuery)
            .getNoResultMsg()
            .should('have.text', SRPContent.noResultMsg)
        searchResultPage
            .getNoResultMsgBox()
            .should('have.css', 'background-color', SRPContent.noResultMsgBoxColor)

    })
});