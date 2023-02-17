import LoginPageObject from "../support/pages/login.PageObject"

import { testData } from "../support/testData";

/// <reference types="../support" />

const loginPage = new LoginPageObject;

describe('Neobank start page', () => {
  let data = testData;

  it('should check login user flow', () => {

    loginPage.visit();

    cy.title()
      .should('eq', data.pageTitle);

    loginPage.phoneNumberField
      .type(data.phone);

    loginPage.nextButton
      .click();
    
    loginPage.authText
      .should('have.text', data.title);
  });
});
