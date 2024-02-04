import shippingCredentials from "../fixtures/shippingCredentials.json";
import PaymentPage from "./PaymentPage";

class ShippingPage {
  getEmailAddressField = () => cy.get('div._with-tooltip input[type="email"]');
  getFirstNameField = () => cy.get('input[name="firstname"]');
  getLastNameField = () => cy.get('input[name="lastname"]');
  getStreetAddressField = () => cy.get('input[name="street[0]"]');
  getCityField = () => cy.get('input[name="city"]');
  getStateProvinceField = () => cy.get('select[name="region_id"]');
  getZipPostalCodeField = () => cy.get('input[name="postcode"]');
  getCountryField = () => cy.get('select[name="country_id"]');
  getPhoneNumberField = () => cy.get('input[name="telephone"]');
  getShippingMethodsRadio = () =>
    cy.get('input[type="radio"][value="flatrate_flatrate"]');
  getNextButton = () =>
    cy.get('button[class="button action continue primary"]');
  getCartIcon = () => cy.get("a.showcart");

  fillUpFormToProceed() {
    this.getEmailAddressField().type(shippingCredentials.EmailAddress);
    this.getFirstNameField().type(shippingCredentials.FirstName);
    this.getLastNameField().type(shippingCredentials.LastName);
    this.getStreetAddressField().type(shippingCredentials.StreetAddress);
    this.getCityField().type(shippingCredentials.City);
    this.getStateProvinceField().select(`${shippingCredentials.StateProvince}`);
    this.getZipPostalCodeField().type(shippingCredentials.ZipPostalCode);
    this.getCountryField().select(`${shippingCredentials.Country}`);
    this.getPhoneNumberField().type(shippingCredentials.PhoneNumber);
    this.getShippingMethodsRadio().check();

    return this;
  }

  clickNextButton() {
    this.getNextButton().click();

    return new PaymentPage();
  }
}

export default ShippingPage;
