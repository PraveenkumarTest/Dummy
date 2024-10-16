const fs = require('fs').promises;
const path = require('path');

class Insert {
  constructor(page) {
    this.page = page;
  }

  async insertcursor(xpath, setStart) {
    try {
      const boundingBox = await this.page.evaluate(async ({ xpath, setStart }) => {
        const paragraph = document.evaluate(xpath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
        if (paragraph) {
          paragraph.scrollIntoView();
          paragraph.focus(); // Focus on the paragraph
          const range = document.createRange();
          range.setStart(paragraph.firstChild, setStart); // Set cursor at the specified position in the paragraph
          range.collapse(true);
          const selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          // Get the bounding box of the selected range
          const boundingBox = range.getBoundingClientRect();
          return boundingBox;
        }
        return null;
      }, { xpath, setStart });

      if (boundingBox) {
        // Perform mouse actions on the bounding box
        await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
        await this.page.mouse.down(); // Press the mouse button
        await this.page.waitForTimeout(100); // Wait for a short time
        await this.page.mouse.up(); // Release the mouse button
      }
      return boundingBox;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

module.exports = Insert;
