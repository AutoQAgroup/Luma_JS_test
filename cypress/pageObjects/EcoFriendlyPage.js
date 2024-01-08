import HomePage from "./HomePage";

class EcoFriendlyPage {
    getEcoFriendlyTitle = () => cy.get('span[data-ui-id="page-title-wrapper"]');
    getEcoFriendlyLink = () => cy.url();
}
export default EcoFriendlyPage;