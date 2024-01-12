import HomePage from "./HomePage";
import ProductListPage from "./ProductListPage";

class ProductPage {
  getProductPageTitle = () => cy.title();
  getProductPageHeader = () => cy.get("header.page-header");
  getProductPageNavigation = () => cy.get("nav.navigation");
  getProductPageBreadcrumbs = () => cy.get("div.breadcrumbs");
  getProductPageBody = () => cy.get('body[data-container="body"]');
  getProductPageFooter = () => cy.get("footer.page-footer");
  getProductPageCopyright = () => cy.get("small.copyright");
  getProductPrice = () => cy.get(".product-info-price .price");
  getProductPriceLabel = () => cy.get(".product-info-price .price-label");
}

export default ProductPage;
