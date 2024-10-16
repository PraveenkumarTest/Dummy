const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');
const Action =require('../tests/Base/Action');

test('get started link', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  
await page.goto("https://elsevierqa.proofcentral.com/en-us/landing-page.html?token=cc4f80cb4b20e2f57a051701f2b3dc");
await page.waitForSelector("//input[@type='button']", { state: 'visible' });
await page.click("//input[@type='button']"); 

// Wait for some time for any potential new tabs to open
await page.waitForTimeout(10000);
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
  try {
    await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']", { state: 'visible', timeout: 20000 });
    await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");
    console.log('Clicked on the close button.');
    await page.waitForTimeout(10000);
  } catch (error) {
    console.error('Error while waiting for or clicking the close button:', error);
  }
  // Full page screenshot
  //await  pages[1].screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()+'Fullpage.png',Fullpage:true})
  // Particular element  screenshot
  //await  pages[1].locator("//div[@class='split-pane__right-pane']").screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()+'Element.png'})
  //expect(await pages[1].screenshot()).toMatchSnapshot('Element.png');
// Define the XPath to select the paragraph element
//   Scroll the element into view
  const elementXPath = "(//div[@data-html-name='para'])[2]";
  const element = await pages[1].locator(elementXPath);
  await element.scrollIntoViewIfNeeded();
  const paragraphXPath = '(//div[@data-html-name="para"])[2]';
  
// Use evaluate to manipulate the DOM and interact with the selected text
const boundingBox = await pages[1].evaluate(async (paragraphXPath) => {
  // Find the paragraph element using XPathir
  const paragraph = document.evaluate(paragraphXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
  
  // Check if the paragraph element is found
  if (paragraph) {
    paragraph.scrollIntoView();
   // Remove unwanted spaces in the paragraph
    paragraph.textContent = paragraph.textContent.replace(/\s+/g, ' ').trim();
    console.log('C11');
   
    // Define the start and end indices of the text range
    const startIndex = 30; // Change this index as needed
    const endIndex = 32;   // Change this index as needed
    
    // Ensure the indices are within the bounds of the text content
    const textLength = paragraph.textContent.length;
    const validStartIndex = Math.min(startIndex, textLength - 1);
    const validEndIndex = Math.min(endIndex, textLength);
    console.log('C1');
    
    // Create a range to select the text range
    const range = new Range();
    range.setStart(paragraph.firstChild, validStartIndex);
    range.setEnd(paragraph.firstChild, validEndIndex);
    
    // Create a selection object and select the range
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    console.log('C2');

    // Get the bounding box of the selected range
    return range.getBoundingClientRect();
  }
  return null;
}, paragraphXPath);
await pages[1].waitForTimeout(10000)
// Check if the bounding box is valid
if (boundingBox) {
  // Perform right-click action at the center of the bounding box
  await pages[1].mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);

  // Prevent default context menu action
  await pages[1].evaluate(() => {
    document.addEventListener('contextmenu', (event) => {
      event.preventDefault();
      console.log("TTT");
    });
  });

  // Perform right-click action
  await pages[1].mouse.down({ button: 'right' });

  // Drag the mouse to the end of the word
  await pages[1].mouse.move(boundingBox.x + boundingBox.width, boundingBox.y + boundingBox.height / 2);

  // Release the right-click mouse button
  await pages[1].mouse.up({ button: 'right' });
}

// Optional: Wait for a specific time to observe the interaction
await pages[1].waitForTimeout(10000);
 // To apply formating
    await pages[1].waitForSelector("//*[@class='contextual-menu contextual-menu--show']//*[@data-plugin-name='bold']", { state: 'visible' , });
    await pages[1].click("//*[@class='contextual-menu contextual-menu--show']//*[@data-plugin-name='bold']");
    await pages[1].waitForTimeout(5000);
    await pages[1].click("//div[@class='accordian__panel-header']//span[text()='View Edit Log']");
    await expect (pages[1]).toHaveScreenshot('Tes.png');
    await pages[1].waitForTimeout(5000);
    // Agin select and add spcl charcter by using selection
 try {
  const specifiedTextSelector = "(//div[@data-html-name='para'])[3]";  
 await pages[1].waitForSelector(specifiedTextSelector, { state: 'visible' });

 await pages[1].evaluate(selector => {
   const element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   if (element && element.firstChild) {
     const range = document.createRange();
     const selection = window.getSelection();
     if (selection) {
       selection.removeAllRanges();
       range.setStart(element.firstChild, 10);
       range.setEnd(element.firstChild, 12);
       selection.addRange(range);
     }
   }
 }, specifiedTextSelector);
   console.log('Role')
 } catch (error) {
  console.log(error);
 }
 try {
  await pages[1].click("//article[@class='editor']//button[@data-tooltip-title='Special Character']");
  await pages[1].waitForSelector("//td[@data-title='GREEK SMALL LETTER LAMDA']", { state: 'visible' , });
  await pages[1].click("//td[@data-title='GREEK SMALL LETTER LAMDA']");
  await pages[1].waitForTimeout(10000);
       // to compare screenshot
  await expect (pages[1]).toHaveScreenshot('Tes.png');
 } catch (error) {
  console.log( error +'Compare failed');
 }
 
      // To take screenshot
    //await pages[1].screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()+'Boldapply.png'})
})