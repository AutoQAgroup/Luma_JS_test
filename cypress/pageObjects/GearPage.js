class GearPage {
    getFirstStringTitle = () => cy.get('div.title:first-of-type strong');
    getSecondStringTitle = () => cy.get('#narrow-by-list2 dt');
    getBagsCategory = () => cy.get('ol.items li:first-child');
    getFitnessEquipmentCategory = () => cy.get('ol.items li:nth-child(2)');
    getWatchesCategory = () => cy.get('ol.items li:last-child');
}

export default GearPage;
