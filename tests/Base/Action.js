const fs = require("fs").promises;
const path = require('path');
class Action{
constructor(pages){
 this.pages=pages;
}
async selectrange(paragraphXPath, startIndex, endIndex) {
    try {
        const boundingBox = await this.pages[1].evaluate(async ({paragraphXPath, startIndex, endIndex}) => {
            // Find the paragraph element using XPath
            const paragraph = document.evaluate(paragraphXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

            // Check if the paragraph element is found
            if (paragraph) {
                paragraph.scrollIntoView();
                // Remove unwanted spaces in the paragraph
                paragraph.textContent = paragraph.textContent.replace(/\s+/g, ' ').trim();

                // Ensure the indices are within the bounds of the text content
                const textLength = paragraph.textContent.length;
                const validStartIndex = Math.min(startIndex, textLength - 1);
                const validEndIndex = Math.min(endIndex, textLength);

                // Create a range to select the text range
                const range = new Range();
                range.setStart(paragraph.firstChild, validStartIndex);
                range.setEnd(paragraph.firstChild, validEndIndex);

                // Create a selection object and select the range
                const selection = window.getSelection();
                selection.removeAllRanges();
                selection.addRange(range);

                // Get the bounding box of the selected range
                return range.getBoundingClientRect();
            }
            return null;
        }, {paragraphXPath, startIndex, endIndex});
        // await this.pages[1].waitForTimeout(10000);
        if (boundingBox) {
            // Perform right-click action at the center of the bounding box
            await this.pages[1].mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);

            // Prevent default context menu action
            await this.pages[1].evaluate(() => {
                document.addEventListener('contextmenu', (event) => {
                    event.preventDefault();
                });
            });

            // Perform right-click action
            await this.pages[1].mouse.down({ button: 'right' });

            // Drag the mouse to the end of the word
            await this.pages[1].mouse.move(boundingBox.x + boundingBox.width, boundingBox.y + boundingBox.height / 2);
            await this.pages[1].waitForTimeout(100);
            // Release the right-click mouse button
            await this.pages[1].mouse.up({ button: 'right' });
           
        }
        return boundingBox;
    } catch (error) {
        console.log(`Error on selecting in text with XPath: ${paragraphXPath}`, error);
        return null;
    }
}
}
module.exports = Action;