const fs = require('fs').promises;
const path = require('path');

class typetext {
    constructor(pages) {
      this.pages = pages;
    }

async  type1(elementPath, text, page,) {
    let flag = false;
    try {
        // Determine the selector type
        const isXPath = elementPath.startsWith('/') || elementPath.startsWith('(');
        // Wait for the element to be visible
        if (isXPath) {
            await page.waitForSelector(`xpath=${elementPath}`, { state: 'visible' });
        } else {
            await page.waitForSelector(elementPath, { state: 'visible' });
        }  
        // Clear the element's content and type the new text
        if (isXPath) {
            const elementHandle = await page.$(`xpath=${elementPath}`);
            await elementHandle.fill('');
            await elementHandle.type(text);
        } else {
            await page.fill(elementPath, '');
            await page.type(elementPath, text);
        } 
        // Log the success
        test.log('pass', `${text} Type: Pass`);
        flag = true;
    } catch (error) {
        console.log(error);
    }
    return flag;
  }
}
module.exports = typetext;