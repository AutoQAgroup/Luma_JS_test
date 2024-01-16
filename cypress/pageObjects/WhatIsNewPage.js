class WhatIsNewPage {
  getWhatIsNewWidgetBlock = () => cy.get(".block-promo");
  getWhatIsNewWidgetsPageHeader = () => cy.get("#page-title-heading");

  clickWhatIsNewWidgetBlock(index) {
    this.getWhatIsNewWidgetBlock().eq(index).click();

    return this;
  }

  verifyWhatIsNewWidgetEndPoint(text) {
    cy.url().should("contain", text);
  }
}

export default WhatIsNewPage;
