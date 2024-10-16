const fs = require('fs').promises;
const path = require('path');


class clk {
  constructor(page) {
    if (!page) {
      throw new Error("A valid 'page' object must be provided");
    }
    this.page = page;
  }
  async click(xpath) {
    if (!this.page.evaluate) {
      throw new Error("The 'page' object is not properly initialized");
    }
    console.log("Clicking element with XPath: ${xpath}");
    await this.page.evaluate((xpath) => {
      const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      if (element) {
        element.click();
      } else {
        throw new Error("Element not found for XPath: ${xpath}");
      }
    }, xpath);
  }
}
module.exports = clk;