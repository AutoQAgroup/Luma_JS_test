import createNewCustomerAccountPageData from "../fixtures/createNewCustomerAccountPageData.json";
import MyAccountPage from "./MyAccountPage";

class CreateNewCustomerAccountPage {
  getCreateNewCustomerFields = () =>
    cy.get("#form-validate label[class='label']");
  getRequiredFields = () => cy.get("#form-validate .field.required");
  getRequiredFieldsAttribute = (field) =>
    cy.get(`.field.required > .label[for="${field}"]`);
  getFirstNameInput = () => cy.get("#firstname");
  getLastNameInput = () => cy.get("#lastname");
  getEmailInput = () => cy.get("#email_address");
  getPasswordInput = () => cy.get("#password");
  getConfirmPasswordInput = () => cy.get("#password-confirmation");
  getCreateAnAccountBtn = () =>
    cy.get(".action.submit.primary[title='Create an Account']");
  getErrorMesaage = () => cy.get("div[class='mage-error']");

  generateRandomNumber() {
    let randomNumberLimit = 100000;
    return Math.floor(Math.random() * randomNumberLimit);
  }

  typeRandomFirstName() {
    let randomFirstName = `${
      createNewCustomerAccountPageData.firstName
    }${this.generateRandomNumber()}`;

    this.getFirstNameInput().type(randomFirstName);

    return this;
  }

  typeRandomLastName() {
    let randomLastName = `${
      createNewCustomerAccountPageData.lastName
    }${this.generateRandomNumber()}`;
    this.getLastNameInput().type(randomLastName);

    return this;
  }

  typeRandomEmail() {
    let randomEmail = `${
      createNewCustomerAccountPageData.firstName
    }${this.generateRandomNumber()}@gmail.com`;

    this.getEmailInput().type(randomEmail);

    return this;
  }

  typeRandomPassword() {
    let randomPassword = `${
      createNewCustomerAccountPageData.password
    }${this.generateRandomNumber()}`;
    this.getPasswordInput().type(randomPassword);
    this.getConfirmPasswordInput().type(randomPassword);

    return this;
  }

  clickCreateAnAccountBtn() {
    this.getCreateAnAccountBtn().click();

    return this;
  }
}

export default CreateNewCustomerAccountPage;
