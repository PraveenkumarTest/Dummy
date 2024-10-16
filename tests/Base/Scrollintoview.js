const fs = require('fs').promises;
const { error } = require('console');
const path = require('path');

class ScrollIntoView {
    constructor(page) {
      if (!page || typeof page.evaluate !== 'function') {
        throw new Error('A valid page object with an evaluate method must be provided');
      }
      this.page = page;
    }
    async scrollIntoView1(xpath) {
      try {
        // Ensure XPath is provided
        if (!xpath) {
          throw new Error('XPath must be provided');
        }
  
        // Wait for the element to be present in the DOM and scroll into view
        await this.page.evaluate((xpath) => {
          const element = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
          if (element) {
            element.scrollIntoView();
          } else {
            throw new Error("Element not found for XPath: ${xpath}");
          }
        }, xpath);
  
        console.log("Scrolled element into view");
      } catch (error) {
        console.error("Error scrolling element into view: " + error.message);
      }
    }
  }
  module.exports = ScrollIntoView;
