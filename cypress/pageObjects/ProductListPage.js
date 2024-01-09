import ProductPage from "./ProductPage";

class ProductListPage {
    getFirstProductImageLink = () => cy.get('.product-item:first-of-type .product-image-container');

    clickFirstProductImageLink() {
        this.getFirstProductImageLink().click();

        return new ProductPage();
    }
}

export default ProductListPage;