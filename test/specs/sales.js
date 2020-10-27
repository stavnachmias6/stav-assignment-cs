const HomePage = require("../pageobjects/home.page");
const SalePage = require("../pageobjects/sale.page");

describe("Actions on sale products", () => {
  it("should click on sale button and verify page change", () => {
    HomePage.open();
    HomePage.saleButton.click();
    expect(browser).toHaveUrl("http://www.ctqatest.biz/ecom/sale.html");
  });

  it("should filter price 100-199$ and validate filter applied", () => {
    expect(SalePage.filterPrice100To199ToChoose).toExist();
    SalePage.filterPrice100To199ToChoose.click();
    expect(browser).toHaveUrlContaining("100-200");
  });

  it("should check if price 100-199$ filter is applied", () => {
    expect(SalePage.priceFilterLabel).toExist();
    expect(SalePage.hundredToTwoHundredAppliedFilterValue).toExist();
  });

  it("should check if the sale page shows discounted products for sale", () => {
    expect(SalePage.saleItems).not.toBeElementsArrayOfSize(0);
  });
});
