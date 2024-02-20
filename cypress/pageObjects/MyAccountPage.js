class MyAccountPage {
  getMyAccountTitle = () => cy.get("h1[class='page-title']");
  getMyAccountMessage = () => cy.get("div[data-bind='html: $parent.prepareMessageForHtml(message.text)']")
}

export default MyAccountPage;
