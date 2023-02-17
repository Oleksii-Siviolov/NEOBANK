import LoginPageObject from "../support/pages/login.PageObject"

/// <reference types="../support" />

const loginPage = new LoginPageObject;

describe('Neobank start page', () => {
  let data;
  
  before(() => {
    cy.task('generateData').then(generateData => {
      data = generateData;
    });
  });

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
