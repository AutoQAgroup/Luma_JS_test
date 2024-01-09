import HomePage from "./HomePage";
import ProductListPage from "./ProductListPage";

class ProductPage {
    getProductPrice = () => cy.get('.product-info-price .price');
    getProductPriceLabel = () => cy.get('.product-info-price .price-label');
    getProductPageTitle = () => cy.title();
    
}

export default ProductPage;