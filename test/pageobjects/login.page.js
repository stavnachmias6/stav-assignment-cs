//import Page from "./page";
const Page = require("./page");

class LoginPage extends Page {
  get emailField() {
    return $("#email");
  }

  get passwordField() {
    return $("#pass");
  }

  get loginButton() {
    return $("#send2");
  }

  get emptyEmailLoginValidation() {
    return $("#advice-required-entry-email");
  }

  get emptyPasswordLoginValidation() {
    return $("#advice-required-entry-pass");
  }

  get invalidLoginError() {
    return $("span=Invalid login or password.");
  }

  open() {
    return super.open("http://www.ctqatest.biz/ecom/customer/account/login/");
  }
}

module.exports = new LoginPage();
