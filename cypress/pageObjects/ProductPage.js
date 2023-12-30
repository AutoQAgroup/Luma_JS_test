import HomePage from "./HomePage";
import ProductListPage from "./ProductListPage";

class ProductPage {
    getProductPrice = () => cy.get('.product-info-price .price');
    
}

export default ProductPage;