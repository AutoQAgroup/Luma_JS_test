//<reference types="cypress"/>

import HomePage from "../pageObjects/HomePage";
import CreateNewCustomerAccountPage from "../pageObjects/CreateNewCustomerAccountPage";
import createNewCustomerAccountData from "../fixtures/createNewCustomerAccountPageData.json";
import MyAccountPage from "../pageObjects/MyAccountPage";

describe("authorizationCreateNewCustomerAccount", () => {
  const homePage = new HomePage();
  const createNewCustomerAccountPage = new CreateNewCustomerAccountPage();
  const myAccountPage = new MyAccountPage();

  beforeEach(() => {
    homePage.clickCreateAnAccountLink();
  });

  it("TC_004.003.001 | Authorization > Create New Customer Account > Verify that fields have descriptions.", () => {
    createNewCustomerAccountPage
      .getCreateNewCustomerFields()
      .should("be.visible")
      .then(($els) => {
        return Cypress.$.makeArray($els).map(($el) => $el.innerText);
      })
      .should(
        "deep.equal",
        createNewCustomerAccountData.createNewCustomerAccountFields
      );
  });

  it("TC_004.003.002 | Authorization > Create New Customer Account >  Verify Required Fields Marked with '*'", () => {
    createNewCustomerAccountPage
      .getRequiredFields()
      .should("have.class", "required");

    createNewCustomerAccountData.fieldsAttribute.forEach((field) => {
      createNewCustomerAccountPage
        .getRequiredFieldsAttribute(field)
        .then(($label) => {
          const content = window
            .getComputedStyle($label[0], "::after")
            .getPropertyValue("content");
          expect(content).to.eq('"*"');
        });
    });
  });

  it("TC_004.003.003 | Authorization > Create New Customer Account > Verify Fields with Valid Data", () => {
    createNewCustomerAccountPage
      .typeRandomFirstName()
      .typeRandomLastName()
      .typeRandomEmail()
      .typeRandomPassword()
      .clickCreateAnAccountBtn();
    myAccountPage
      .getMyAccountTitle()
      .should("be.visible")
      .and("contain", createNewCustomerAccountData.myAccountPageHeader);
    myAccountPage
      .getMyAccountMessage()
      .should("be.visible")
      .and("have.text", createNewCustomerAccountData.myAccountPageMessage);
  });

  it("TC_004.003.004 | Authorization > Create New Customer Account > Verify Error Messages for Required Fields", () => {
    createNewCustomerAccountPage.clickCreateAnAccountBtn();
    createNewCustomerAccountPage.getErrorMesaage().each((errorMesaage) => {
      cy.wrap(errorMesaage).should("be.visible");
      cy.wrap(errorMesaage).should(
        "have.text",
        createNewCustomerAccountData.errorMessage
      );
    });
  });
});
