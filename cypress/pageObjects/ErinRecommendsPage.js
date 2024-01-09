import HomePage from "./HomePage";

class ErinRecommendsPage {
getErinRecommendsTitle = () => cy.get('span[data-ui-id="page-title-wrapper"]')
getErinRecommendsLink = () => cy.url()
}
export default ErinRecommendsPage;