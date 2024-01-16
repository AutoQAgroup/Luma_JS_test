import HomePage from "./HomePage";
import ProductListPage from "./ProductListPage";
import productPageData from "../fixtures/productPageData.json";

class ProductPage {
    getProductPrice = () => cy.get('.product-info-price .price');
    getProductPriceLabel = () => cy.get('.product-info-price .price-label');
    getProductPageTitle = () => cy.title();

    getProductMainInfo = () => cy.get('.product-info-main');
    getProductPictures = () => cy.get('div.product.media');
    getProductDetailedInfo = () => cy.get('div.product.data.items');
    getProductRelated = () => cy.get('div.block.related');

  
    getProductPageHeader = () => cy.get("header.page-header");
    getProductPageNavigation = () => cy.get("nav.navigation");
    getProductPageBreadcrumbs = () => cy.get("div.breadcrumbs");
    getProductPageBody = () => cy.get('body[data-container="body"]');
    getProductPageFooter = () => cy.get("footer.page-footer");
    getProductPageCopyright = () => cy.get("small.copyright");

    getProductName = () => cy.get('span.base');


  compareNameAndEndPoint() {
    this.getProductName().then(($el)=>{
      let text = $el.text().toLowerCase().split(' ').join('-')
      expect(text).to.eql(productPageData.ExampleUrlEndPoint)
      return this;
    });
  }
  }
  

export default ProductPage;
