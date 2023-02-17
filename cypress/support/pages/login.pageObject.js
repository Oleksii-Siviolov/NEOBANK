import PageObject from "../PageObject";

export default class LoginPageObject extends PageObject {
  url = 'https://web.neobank.one/';

  get phoneNumberField() {
    return cy.findById('login');
  };

  get nextButton() {
    return cy.findById('btnNext');
  };

  get authText() {
    return cy.get('.auth-form-title');
  }
}