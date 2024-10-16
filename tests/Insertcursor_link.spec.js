const { test, expect, selectors } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test('get started link', async ({ browser }) => {
  const context = await browser.newContext();
  const timeout =150000;
  const page = await context.newPage();
  
  await page.goto('https://elsevierqa.proofcentral.com/en-us/landing-page.html?token=cc4f80cb4b20e2f57a051701f2b3dc');
 // await page.setViewportSize({ width: 1536, height: 864 });
  
  const title = await page.title();
  console.log('Title:', title);
  
  await expect(page).toHaveTitle('Proof Central - Landing Page');

  // Wait for the button to be visible before clicking
  await page.waitForSelector("//input[@type='button']", { state: 'visible' });
  await page.click("//input[@type='button']"); 
  
  // Wait for some time for any potential new tabs to open
  await page.waitForTimeout(10000);

  // Get all pages (tabs) in the context
  const pages = context.pages();
  
  // Count the number of tabs
  const numberOfTabs = pages.length;
  console.log('Number of tabs:', numberOfTabs);

  if (numberOfTabs >= 2) {
    // Switch to the second tab (index 1)
    await pages[1].bringToFront();
    console.log('Switched to 2nd tab');
    
    // Get the title of the second tab
    const secondTabTitle = await pages[1].title();
    console.log('Title of the second tab:', secondTabTitle);
    
    // Now you're on the second tab and can interact with it
  } else {
    console.error("There are not enough tabs open to switch to the second tab.");
  }

  // Wait for the close button to be visible before clicking
  // Wait for the close button to be visible before clicking
try {
  await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']", { state: 'visible', timeout: 20000 });
  await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");
  console.log('Clicked on the close button.');
} catch (error) {
  console.error('Hopscotch not found:', error);
}
// to place an cursor
 

    const xpath = "(//div[@data-html-name='para'])[1]"; // Replace with your actual XPath
    const setStart = 6
    ; // Position to set the cursor within the text node

    const boundingBox = await insertcursor(xpath, setStart);
    console.log(boundingBox);



async function insertcursor(xpath, setStart) {
    try {
        const boundingBox = await pages[1].evaluate(async ({xpath, setStart}) => {
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
        }, {xpath, setStart});

        if (boundingBox) {
            // Perform mouse actions on the bounding box
            await pages[1].mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
            await pages[1].mouse.down(); // Press the mouse button
            //await pages[1].waitForTimeout(100); // Wait for a short time
            await pages[1].mouse.up(); // Release the mouse button
            await pages[1].waitForTimeout(5000);
            console.log("The end");
    try {
      // To place an cursor and add an link
            await pages[1].click(" (//button[@data-tooltip-title='Link'])[1]");
          //  await page.locator("//div[@class='link-editor__input-container']//textarea[@class='link-editor__web-url']").click();
            await pages[1].locator( "[class='link-editor__web-url']").fill('https://www.google.com/');
            await pages[1].waitForTimeout(5000);
            await pages[1].waitForSelector("//button[@class='link-editor__update-btn']", { state: 'visible'});
            await pages[1].click("//button[@class='link-editor__update-btn']");
            await pages[1].waitForTimeout(5000);
             //  await pages
    } catch (error) {
            console.log(error + "Link not upload")
          }        
        }
        return boundingBox;
    } catch (error) {
         console.log(Error);
         console.log("The ens");
        return null;
    }
}
;
});