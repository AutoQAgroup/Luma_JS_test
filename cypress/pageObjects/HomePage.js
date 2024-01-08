import WomanJacketsPage from "../pageObjects/WomanJacketsPage";
import EcoFriendlyPage from "./EcoFriendlyPage";
import ErinRecommendsPage from "./ErinRecommendsPage";
import PerformanceFabricsPage from "./PerformanceFabricsPage";

class HomePage {
  getWomanMainMenuLink = () => cy.get("#ui-id-4");
  getWomanTopsLink = () => cy.get("#ui-id-9");
  getWomanJacketsLink = () => cy.get("#ui-id-11");
  getHomePageLogo = () => cy.get("a.logo");
  getTitleName = () => cy.get('a.logo img');
  getImageBoxButton = () => cy.get('span[class="action more button"]');
  getImageBoxesLinks = () => cy.get('span[class="action more icon"]');
  getErinRecommendsLink = () => cy.get('span[class="action more icon"]').contains('Shop Erin Recommends');
  getEcoFriendlyLink = () => cy.get('span[class="action more icon"]').contains('Shop Eco-Friendly');
  getShopPerformanceWidget = () => cy.get("a.block-promo.home-performance span[class='content bg-white']");
  getShopPerformanceWidgetText = () => cy.get("a.block-promo.home-performance > span > span.action.more.icon");

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

    return new WomanJacketsPage();
  }

  clickErinRecommendsLink() {
    this.getErinRecommendsLink().click();
    return new ErinRecommendsPage();
  }

  clickEcoFriendlyLink() {
    this.getEcoFriendlyLink().click();
    return new EcoFriendlyPage();
  }

  clickShopPerformanceWidget(){
    this.getShopPerformanceWidget().click();

    return new PerformanceFabricsPage()
  }
}

export default HomePage;
