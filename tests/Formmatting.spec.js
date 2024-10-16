const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test.only('PC', async ({browser}) => {
    const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto("https://elsevierqa.proofcentral.com/en-us/landing-page.html?token=cc4f80cb4b20e2f57a051701f2b3dc");
  await page.waitForTimeout(8000);
  await page.waitForSelector("//input[@type='button']", { state: 'visible' });
  await page.click("//input[@type='button']");

  // Wait for some time for any potential new tabs to open
   await page.waitForTimeout(3000);
  const pages = context.pages();

  // Count the number of tabs
  const numberOfTabs = pages.length;
  console.log('Number of tabs:', numberOfTabs);
   await page.waitForTimeout(10000);

  if (numberOfTabs >= 2) {
    // Switch to the second tab (index 1)
    await pages[1].bringToFront();
    console.log('Switched to 2nd tab');
    await pages[1].waitForTimeout(10000);

    // Get the title of the second tab
    const secondTabTitle = await pages[1].title();
    console.log('Title of the second tab:', secondTabTitle);

    // Now you're on the second tab and can interact with it
    await pages[1].locator('//button[@class="hopscotch-bubble-close hopscotch-close"]').click();
    await pages[1].waitForTimeout(5000);
    // await expect (pages[1]).toHaveScreenshot('PCbold1.png');
    const paragraphXPath = '(//div[@data-html-name="para"])[5]';
    const boundingBox = await pages[1].evaluate(async (paragraphXPath) => {
      // Find the paragraph element using XPath
      const paragraph = document.evaluate(paragraphXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
      // Check if the paragraph element is found
      if (paragraph) {
        paragraph.scrollIntoView();
        // Remove unwanted spaces in the paragraph
        paragraph.textContent = paragraph.textContent.replace(/\s+/g, ' ').trim();
        // Define the start and end indices of the text range
        const startIndex = 6; // Change this index as needed
        const endIndex = 10;   // Change this index as needed

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
    }, paragraphXPath);

    await pages[1].waitForTimeout(10000);

    // Check if the bounding box is valid
    if (boundingBox) {
      // Perform right-click action at the center of the bounding box
      await pages[1].mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);

      // Prevent default context menu action
      await pages[1].evaluate(() => {
        document.addEventListener('contextmenu', (event) => {
          event.preventDefault();
        });
      });

      // Perform right-click action
      await pages[1].mouse.down({ button: 'right' });

      // Drag the mouse to the end of the word
      await pages[1].mouse.move(boundingBox.x + boundingBox.width, boundingBox.y + boundingBox.height / 2);

      // Release the right-click mouse button
      await pages[1].mouse.up({ button: 'right' });
    }
    await pages[1].waitForTimeout(6000);
  } else {
    console.error("There are not enough tabs open to switch to the second tab.");
  }
     // To apply formatting
    await pages[1].waitForTimeout(2000);
    await pages[1].waitForSelector("//*[@class='contextual-menu contextual-menu--show']//*[@data-plugin-name='bold']", { state: 'visible' , });
    await pages[1].click("//*[@class='contextual-menu contextual-menu--show']//*[@data-plugin-name='bold']");
    await expect (pages[1]).toHaveScreenshot('PCbold2.png');
    await pages[1].click("//div[@class='accordian__panel-header']//span[text()='View Edit Log']");
    await pages[1].waitForTimeout(5000);

    try {
    
    } catch (error) {
      
    }
      // To take screenshots
   
});