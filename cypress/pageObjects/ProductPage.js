import HomePage from "./HomePage";
import ProductListPage from "./ProductListPage";

class ProductPage {
    getProductPrice = () => cy.get('.product-info-price .price');
    getProductPriceLabel = () => cy.get('.product-info-price .price-label');
    getProductPageTitle = () => cy.title();
    getProductMainInfo = () => cy.get('.product-info-main');
    getProductPictures = () => cy.get('div.product.media');
    getProductData = () => cy.get('div.product.data.items');
    getProductRelated = () => cy.get('div.block.related');
}

export default ProductPage;