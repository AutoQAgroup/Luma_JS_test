import WomanJacketsPage from "../pageObjects/WomanJacketsPage";
import ProductListPage from "./ProductListPage";
import EcoFriendlyPage from "./EcoFriendlyPage";
import ErinRecommendsPage from "./ErinRecommendsPage";
import PerformanceFabricsPage from "./PerformanceFabricsPage";
import SearchResultPage from "./SearchResultPage";
import ProductPage from "./ProductPage";
import WhatIsNewPage from "./WhatIsNewPage";
import ShippingPage from "./ShippingPage";
import CreateNewCustomerAccountPage from "./CreateNewCustomerAccountPage";

class HomePage {
  getWomanMainMenuLink = () => cy.get("#ui-id-4");
  getWomanTopsLink = () => cy.get("#ui-id-9");
  getWomanJacketsLink = () => cy.get("#ui-id-11");
  getHomePageLogo = () => cy.get("a.logo");
  getTitleName = () => cy.get("a.logo img");
  getImageBoxButton = () => cy.get('span[class="action more button"]');
  getImageBoxesLinks = () => cy.get(".action.more");
  getErinRecommendsLink = () =>
    cy.get('span[class="action more icon"]').contains("Shop Erin Recommends");
  getEcoFriendlyLink = () =>
    cy.get('span[class="action more icon"]').contains("Shop Eco-Friendly");
  getShopPerformanceWidget = () =>
    cy.get("a.block-promo.home-performance span[class='content bg-white']");
  getShopPerformanceWidgetText = () =>
    cy.get("a.block-promo.home-performance > span > span.action.more.icon");
  getLumaLogo = () => cy.get("a[class='logo']");
  getHomePageUrl = () => cy.url();
  getMainContent = () => cy.get("#maincontent");
  getSearchInput = () => cy.get("#search");
  getWidgetLinks = () => cy.get("div.blocks-promo a");
  getWhatIsNewPageLink = () =>
    cy.get(
      "a[href='https://magento.softwaretestingboard.com/what-is-new.html']"
    );
  getCartIcon = () => cy.get("a.showcart");
  getMiniCartEmptyPopup = () => cy.get("div.block-minicart");
  getItemSizeButton = () =>
    cy.get("li.product-item:first-child .size [option-label='M']");
  getItemColorButton = () =>
    cy.get("li.product-item:first-child .color [option-label='Orange']");
  getItemAddToCartButton = () =>
    cy.get("li.product-item:first-child button[title='Add to Cart']");
  getCartItemsCounter = () => cy.get("span.counter-number");
  getCartProceedToCheckoutButton = () =>
    cy.get("div#minicart-content-wrapper button#top-cart-btn-checkout");
  getCartViewAndEditCartLink = () =>
    cy.get("div#minicart-content-wrapper a[class='action viewcart']");
  getCreateAnAccountLink = () =>
    cy.get(
      "a[href='https://magento.softwaretestingboard.com/customer/account/create/']"
    ).contains("Create an Account");
  getMenDropDownBtn = () => cy.get("#ui-id-2 > li.level0.nav-3");
  getMenDropDownMenu = () => cy.get("li.level0.nav-3 > ul.level0.submenu");
  getMenDrpoDownMenuItems = () => cy.get("li.level0.nav-3 > ul > li.level1");
  getMenDropDownTops = () => cy.get("li.level1.nav-3-1"); 
  getMenDropDownTopsItems = () => cy.get("ul > li.level1.nav-3-1 > ul > li.level2");
  getMenDropDownBottoms = () => cy.get("li.level1.nav-3-2");
  getMenDropDownBottomsItems = () => cy.get("ul > li.level1.nav-3-2 > ul > li.level2");

  hoverWomanMainMenuLink() {
    this.getWomanMainMenuLink().trigger("mouseover");

    return this;
  }

  hoverWomanTopsLink() {
    this.getWomanTopsLink().trigger("mouseover");

    return this;
  }

  clickWomanJacketsLink() {
    this.getWomanJacketsLink().click();

    return new ProductListPage();
  }

  clickErinRecommendsLink() {
    this.getErinRecommendsLink().click();
    return new ErinRecommendsPage();
  }

  clickEcoFriendlyLink() {
    this.getEcoFriendlyLink().click();
    return new EcoFriendlyPage();
  }

  clickShopPerformanceWidget() {
    this.getShopPerformanceWidget().click();

    return new PerformanceFabricsPage();
  }

  clickLumaLogo() {
    this.getLumaLogo().click();

    return this;
  }

  verifyBaseUrl() {
    this.getHomePageUrl().should("eq", Cypress.config().baseUrl);
  }

  performSearch(searchQuery) {
    this.getSearchInput().type(searchQuery).type("{enter}");

    return new SearchResultPage();
  }

  visitRandomPDPFromArrayUrl(array) {
    let randomUrlIndex = Math.floor(Math.random() * array.length);
    let randomUrl = array[randomUrlIndex];

    cy.visit(randomUrl);

    return new ProductPage();
  }

  clickWidgetLinks(index) {
    this.getWidgetLinks().eq(index).click();

    return cy.url();
  }

  clickWhatsNewPageLink() {
    this.getWhatIsNewPageLink().click();

    return new WhatIsNewPage();
  }

  verifySearchBar() {
    this.getSearchInput().should("be.visible");
    this.getSearchInput()
      .invoke("attr", "placeholder")
      .then((placeholder) => {
        expect(placeholder).to.eql("Search entire store here...");
      });

    return this;
  }

  visitPagesSearchBar(urls) {
    urls.forEach((page) => {
      cy.visit(page);
      this.verifySearchBar();
    });
  }

  clickCartIcon() {
    this.getCartIcon().click();

    return this;
  }

  addItemToCart() {
    this.getItemSizeButton().click();
    this.getItemColorButton().click();
    this.getItemAddToCartButton().click({ force: true });

    return this;
  }

  clickCartProceedToCheckoutButton() {
    this.getCartProceedToCheckoutButton().click();

    return new ShippingPage();
  }

  clickCreateAnAccountLink() {
    this.getCreateAnAccountLink().click();

    return new CreateNewCustomerAccountPage();
  }

  hoverMenDropDownBtn(){
    this.getMenDropDownBtn().trigger("mouseover");

    return this;
  }

  hoverMenDropDownTops(){
    this.getMenDropDownTops().trigger("mouseover");

    return this;
  }

  hoverMenDropDownBottoms(){
    this.getMenDropDownBottoms().trigger("mouseover");

    return this;
  }

  triggerSubMenuHover(){
    this.getMenDropDownMenu().trigger("mouseover");

    return this;
  }
}
export default HomePage;
