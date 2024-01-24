// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import {widgetBlock, actionIcons} from "../fixtures/homePageData.json"

describe('checkRedirectsHomePageWidgets', () =>{
   const homePage = new HomePage(); 

   actionIcons.forEach((widget, index) => {
   it(`RF_001.002 |001.003 | 001.004.00${1+index}| Main page > Self > Check ${widget}, when widgets are clicked`, function(){
    homePage
    .clickWidgetLinks(index)
    .should("contain", widgetBlock.widgetLinks[index])
    cy.contains(widgetBlock.widgetHeaderName[index]);
   })
});
});