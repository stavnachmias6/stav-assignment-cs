const HomePage = require("../pageobjects/home.page");
const LoginPage = require("../pageobjects/login.page");

describe("Logging In", () => {
  const email = "test@test.com";
  const password = "ThisIs@T3st";

  it("should click on account button on homepage and verify dropdown opens", () => {
    HomePage.open();
    expect(HomePage.accountButton).toBeClickable();
    HomePage.accountButton.click();
    expect(HomePage.accountDropdown).toBeDisplayed();
  });

  it("should click on login button from dropdown and verify navigation to login page", () => {
    expect(HomePage.loginButton).toBeClickable();
    HomePage.loginButton.click();
    expect(browser).toHaveUrl(
      "http://www.ctqatest.biz/ecom/customer/account/login/"
    );
  });

  it("should verify there are login fields", () => {
    LoginPage.open();
    expect(LoginPage.emailField).toBeExisting();
    expect(LoginPage.passwordField).toBeExisting();
    expect(LoginPage.loginButton).toBeExisting();
    expect(LoginPage.loginButton).toBeClickable();
  });

  it("should verify validation when logging in with empty email and password", () => {
    expect(LoginPage.emailField).toHaveValue("");
    expect(LoginPage.passwordField).toHaveValue("");
    LoginPage.loginButton.click();
    expect(LoginPage.emptyEmailLoginValidation).toBeDisplayed();
    expect(LoginPage.emptyPasswordLoginValidation).toBeDisplayed();
  });

  it("should verify validation when logging in with email only (empty password field)", () => {
    LoginPage.emailField.setValue(email);
    LoginPage.passwordField.setValue("");
    LoginPage.loginButton.click();
    expect(LoginPage.emptyEmailLoginValidation).not.toBeDisplayed();
    expect(LoginPage.emptyPasswordLoginValidation).toBeDisplayed();
  });

  it("should verify validation when logging in with password only (empty email field)", () => {
    LoginPage.emailField.setValue("");
    LoginPage.passwordField.setValue(password);
    LoginPage.loginButton.click();
    expect(LoginPage.emptyEmailLoginValidation).toBeDisplayed();
    expect(LoginPage.emptyPasswordLoginValidation).not.toBeDisplayed();
  });

  it("should verify error shows for invalid email and password", () => {
    LoginPage.emailField.setValue(email);
    LoginPage.passwordField.setValue(password);
    LoginPage.loginButton.click();
    expect(LoginPage.invalidLoginError).toBeDisplayed();
  });
});
