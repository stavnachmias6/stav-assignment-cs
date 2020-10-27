const Page = require("./page");

class ResultsPage extends Page {
  get productNames() {
    return $$("//h2/a");
  }

  get viewDetailsButton() {
    return $("=View Details");
  }
}

module.exports = new ResultsPage();
