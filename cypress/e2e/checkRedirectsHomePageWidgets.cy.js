// <reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import {widgetBlock, actionIcons} from "../fixtures/homePageData.json"
describe('checkRedirectsHomePageWidgets', () =>{
   const homePage = new HomePage(); 
   actionIcons.forEach((widget, index) => {
   it(`RF_001.002 |001.003 | 001.004.001 | Main page > Self >Check ${widgetName}, when widgets are clicked`, () =>{
    homePage
    .clickWidgetLinks(widget, index)
    .should("contain", widgetBlock.widgetLinks[index])
    cy.contains(widgetBlock.widgetHeaderName[index]);
   })
});
});