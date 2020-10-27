const HomePage = require("../pageobjects/home.page");
const ResultsPage = require("../pageobjects/results.page");
const ProductPage = require("../pageobjects/product.page");
const CartPage = require("../pageobjects/cart.page");

describe("Adding item to cart and checking out", () => {
  const productToSearch = "shirt";
  const productToChoose = "Slim Fit Dobby Oxford Shirt";

  it("should click on search bar and verify placeholder and focus", () => {
    HomePage.open();
    HomePage.searchField.click();
    expect(HomePage.searchField).toHaveAttr(
      "placeholder",
      "Search entire store here..."
    );
    expect(HomePage.searchField).toBeFocused();
  });

  it("should search for item and verify auto complete shows", () => {
    HomePage.searchField.addValue(productToSearch);
    expect(HomePage.autocompleteResults).toExist();
  });

  it("should click on search button and verify result page navigation", () => {
    HomePage.searchButton.click();
    expect(browser).toHaveUrlContaining(
      "http://www.ctqatest.biz/ecom/catalogsearch/result/?q"
    );
  });

  it("should find wanted item from results and click on it", () => {
    var i;
    for (i = 0; i < ResultsPage.productNames.length; i++) {
      if (
        ResultsPage.productNames[i].getText().toLowerCase() ==
        productToChoose.toLowerCase()
      ) {
        ResultsPage.productNames[i].click();
        ProductPage.productName.waitForDisplayed();
        expect(ProductPage.productName).toHaveText(productToChoose, {
          ignoreCase: true,
        });
        break;
      }
    }
    expect(i).not.toBe(ResultsPage.productNames.length);
  });

  it("should choose product color and size", () => {
    expect(ProductPage.sizeOptions).not.toBeClickable();
    ProductPage.colorOptions.selectByIndex(1);
    expect(ProductPage.sizeOptions).toBeClickable();
    ProductPage.sizeOptions.selectByIndex(1);
  });

  it("should add to cart and verify navigation to cart", () => {
    ProductPage.addToCartButton.click();
    expect(browser).toHaveUrl("http://www.ctqatest.biz/ecom/checkout/cart/");
    expect(CartPage.pageHeader).toHaveText("Shopping Cart", {
      ignoreCase: true,
    });
  });

  it("should verify product was added to cart", () => {
    expect(CartPage.productName).toHaveText(productToChoose, {
      ignoreCase: true,
    });
  });
});
