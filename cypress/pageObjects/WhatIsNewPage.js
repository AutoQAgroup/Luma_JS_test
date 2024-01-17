class WhatIsNewPage {
  getWhatIsNewWidgetsPageHeader = () => cy.get("#page-title-heading");
  getWhatIsNewWidgetContent = () => cy.get("span[class='content']");
  getWhatIsNewSection = () => cy.get("div[class='categories-menu'] ul[class='items']");
  getWhatIsNewSectionName = () => cy.get("div[class='categories-menu'] strong[class='title']");

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

  chooseWhatIsNewSection(index) {
    return this.getWhatIsNewSection().eq(index)
  } 

  chooseWhatIsNewSectionName(index) {
    return this.getWhatIsNewSectionName().eq(index)
  } 
}

export default WhatIsNewPage;
