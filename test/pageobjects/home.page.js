const Page = require("./page");

class HomePage extends Page {
  get accountButton() {
    return $("//div[@class='account-cart-wrapper']/a/span[@class='label']");
  }

  get accountDropdown() {
    return $("#header-account");
  }

  get loginButton() {
    return $("[title='Log In']");
  }

  get searchField() {
    return $("#search");
  }

  get autocompleteResults() {
    return $("#search_autocomplete");
  }

  get searchButton() {
    return $(".search-button");
  }

  get saleButton() {
    return $("//li[contains(@class,'nav-5 parent')]/a");
  }

  open() {
    return super.open("http://www.ctqatest.biz/ecom/");
  }
}

module.exports = new HomePage();
