const Page = require("./page");

class CartPage extends Page {
  get pageHeader() {
    return $("h1=Shopping Cart");
  }

  get productName() {
    return $("//h2/a");
  }
}

module.exports = new CartPage();
