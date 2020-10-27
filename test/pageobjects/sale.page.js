const Page = require("./page");

class SalePage extends Page {
  get saleItems() {
    return $$(".item");
  }

  get filterPrice100To199ToChoose() {
    return $("*=$100.00");
  }

  get priceFilterLabel() {
    return $("span=Price:");
  }

  get hundredToTwoHundredAppliedFilterValue() {
    return $$("span=$100.00 - $199.99");
  }

  open() {
    return super.open("http://www.ctqatest.biz/ecom/sale.html");
  }
}

module.exports = new SalePage();
