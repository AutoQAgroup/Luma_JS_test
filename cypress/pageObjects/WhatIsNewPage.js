class WhatIsNewPage {
  getWhatIsNewWidgetsPageHeader = () => cy.get("#page-title-heading");
  getWhatIsNewWidgetContent = () => cy.get("span[class='content']");

  clickWhatIsNewWidgetBlock(index) {
    this.getWhatIsNewWidgetContent().eq(index).click();

    return this;
  }

  verifyWhatIsNewWidgetEndPoint(text) {
    cy.url().should("contain", text);
  }

  chooseWhatIsNewWidgetContent(index) {
    return this.getWhatIsNewWidgetContent().eq(index)
  }
}

export default WhatIsNewPage;
