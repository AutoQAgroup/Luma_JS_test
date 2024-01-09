class SearchResultPage {
    getSRPtitle = () => cy.get('span[data-ui-id="page-title-wrapper"]');
    getNoResultMsg = () => cy.get('.message.notice > div');
    getNoResultMsgBox = () => cy.get('.message.notice');
}

export default SearchResultPage