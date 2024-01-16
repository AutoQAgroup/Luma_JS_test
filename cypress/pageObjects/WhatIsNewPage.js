class WhatIsNewPage {
  getWhatIsNewWidgetBlock = () => cy.get(".block-promo");

  clickWhatIsNewWidgetBlock(index) {
    this.getWhatIsNewWidgetBlock().eq(index).click();

    return this;
  }

  verifyWhatIsNewWidgetEndPoint(text) {
    cy.url().should("contain", text);
  }

  verifyWhatIsNewWidgetHeader(text) {
    cy.contains(text);
  }
}

export default WhatIsNewPage;
