/// <reference types="cypress" />

import HomePage from "../pageObjects/HomePage";
import ShippingPage from "../pageObjects/ShippingPage";
import PaymentPage from "../pageObjects/PaymentPage";

describe("headerCart", () => {
  const homepage = new HomePage();
  const shippingPage = new ShippingPage();
  const paymentPage = new PaymentPage();

  it("TC_003.004.001 Header > Cart > Popup window", () => {
    cy.wait(1000);
    homepage
        .clickCartIcon()
        .getMiniCartEmptyPopup()
        .should("be.visible");
  });

  it.skip("TC_003.004.002 Header > Cart > Reserved items number", () => {
    homepage
      .addItemToCart()
      .getCartItemsCounter()
      .should("have.a.prop", "innerText", "1");
  });

  it("TC_003.004.003 Header > Cart > Empty cart popup window", () => {
    cy.wait(1000);
    homepage
      .clickCartIcon()
      .getMiniCartEmptyPopup()
      .should("be.visible")
      .and("contain", "You have no items in your shopping cart.");
  });

  it("TC_003.004.004 Header > Cart > NOT empty cart popup window", () => {
    homepage.addItemToCart();
    cy.wait(2000);
    homepage
      .clickCartIcon()
      .getCartProceedToCheckoutButton()
      .should("be.visible")
      .and("have.text", "Proceed to Checkout");
    homepage
      .getCartViewAndEditCartLink()
      .should("be.visible")
      .and("contain", "View and Edit Cart");
  });

  it.skip("TC_003.004.005 Header > Cart > Icon absence on order proceed windows", () => {
    homepage
        .addItemToCart();
    cy.wait(2000);
    homepage
        .clickCartIcon()
        .clickCartProceedToCheckoutButton();
    shippingPage
        .getCartIcon()
        .should("not.exist");
    shippingPage
        .fillUpFormToProceed()
        .clickNextButton();
    paymentPage
        .getCartIcon()
        .should("not.exist");
  });
});
