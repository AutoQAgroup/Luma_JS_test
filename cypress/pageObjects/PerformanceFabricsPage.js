class PerformanceFabricsPage {
  getPerformanceFabricsPageTitle = () => cy.get("#page-title-heading");
  getPerformanceFabricsPageUrl = () => cy.url();
}

export default PerformanceFabricsPage;
