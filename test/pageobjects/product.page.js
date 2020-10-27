const Page = require("./page");

class ProductPage extends Page {
  get productName() {
    return $(".h1");
  }

  get colorOptions() {
    return $("#attribute92");
  }

  get sizeOptions() {
    return $("#attribute180");
  }

  get addToCartButton() {
    //return $("span=Add to Cart");
    return $("//div/button[@title='Add to Cart']");
  }
}

module.exports = new ProductPage();
