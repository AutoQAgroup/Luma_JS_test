///<reference types="cypress"/>

import GearPage from "../pageObjects/GearPage";
import gearPageData from "../fixtures/gearPageData.json"
import { it } from "mocha";

describe('checkGearPageSidebar', () => {
    const gearPage = new GearPage();

    beforeEach(() => {
        cy.visit(gearPageData.ExampleUrl);
    });

    it('TC_009.001.001 | Gear page > Shop by category > Visibility of categories', () => {
        gearPage
            .getFirstStringTitle()
            .should('contain', gearPageData.FirstStringTitle)
            .and('be.visible')
        gearPage
            .getSecondStringTitle()
            .should('contain', gearPageData.SecondStringTitle)
            .and('be.visible')    
        gearPage
            .getBagsCategory()
            .should('contain', gearPageData.FirstCategory)
            .and('be.visible')
        gearPage
            .getFitnessEquipmentCategory()
            .should('contain', gearPageData.SecondCategory)
            .and('be.visible')
        gearPage
            .getWatchesCategory()
            .should('contain', gearPageData.ThirdCategory)
            .and('be.visible')

    });
});
