import WomanJacketsPage from "../pageObjects/WomanJacketsPage";
import ProductListPage from "./ProductListPage";
import EcoFriendlyPage from "./EcoFriendlyPage";
import ErinRecommendsPage from "./ErinRecommendsPage";
import PerformanceFabricsPage from "./PerformanceFabricsPage";

class HomePage {
  getWomanMainMenuLink = () => cy.get("#ui-id-4");
  getWomanTopsLink = () => cy.get("#ui-id-9");
  getWomanJacketsLink = () => cy.get("#ui-id-11");
  getHomePageLogo = () => cy.get("a.logo");
  getTitleName = () => cy.get("a.logo img");
  getImageBoxButton = () => cy.get('span[class="action more button"]');
  getImageBoxesLinks = () => cy.get('span[class="action more icon"]');
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

  verifyLogoPresence() {
    this.getLumaLogo().should("be.visible");
    this.getLumaLogo().find("img").should("have.attr", "src");

    return this;
  }

  visitPages(urls) {
    urls.forEach((page) => {
      cy.visit(page);
      this.verifyLogoPresence();
    });
  }

  clickLumaLogo() {
    this.getLumaLogo().click();

    return this;
  }

  verifyBaseUrl() {
    this.getHomePageUrl().should("eq", Cypress.config().baseUrl);
  }

  returnHomePage(urls) {
    urls.forEach((page) => {
      cy.visit(page);
      this.clickLumaLogo();
      this.verifyBaseUrl();
      this.getMainContent().should("be.visible");
    });
  }
}

export default HomePage;
