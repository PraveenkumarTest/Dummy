// @ts-check
const { test, expect } = require('@playwright/test');
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
try {
  // Hopscotch click
  await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']", { state: 'visible', timeout: 20000 });
  await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");
  console.log('Clicked on the close button.');
} catch (error) {
  console.error('Error while waiting for or clicking the close button:', error);
}
//  await pages[1].click("//div[@class='accordian__panel-header']//span[text()='View Edit Log']");
// // await pages[1].click("//li[@class='tab-panel__item tab-panel__item--active']//span[text()='Edits']");
//  await pages[1].waitForSelector("//span[@class='edit-log__insert' and text()='First']", { state: 'visible'});

   // To select an text and an comment
 const specifiedTextSelector = "(//span[text()='Major Article'])[1]";  
 await pages[1].waitForSelector(specifiedTextSelector, { state: 'visible' });

 await pages[1].evaluate(selector => {
   const element = document.evaluate(selector, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
   if (element && element.firstChild) {
     const range = document.createRange();
     const selection = window.getSelection();
     if (selection) {
       selection.removeAllRanges();
       range.setStart(element.firstChild, 5);
       range.setEnd(element.firstChild, 12);
       selection.addRange(range);
     }
   }
 }, specifiedTextSelector);
   console.log('Role')
  //await page[1].waitForTimeout(5000);
  //await pages[1].waitForSelector("//div[@class='contextual-menu contextual-menu--show']//button[@title='Italic (Ctrl+I)']", { state: 'visible' , });
  await pages[1].waitForSelector("(//button[@data-tooltip-title='Comment'])[1]", { state: 'visible' , });
  await pages[1].click("(//button[@data-tooltip-title='Comment'])[1]");
  await pages[1].waitForSelector("//div[@class='instruct-panel__container']//div[@class='rich-text-editor__wrapper']//div[@class='rich-text-editor__placeholder']", { state: 'visible' , });
  await pages[1].click("//div[@class='instruct-panel__container']//div[@class='rich-text-editor__content']");
  await pages[1].keyboard.type("Add comment");

  //To attched any files in local 
 try {
    await pages[1].locator('//span[@title="Click to attach files"]').setInputFiles('D:/Demo/FE/eee.png')
    await pages[1].waitForTimeout(6000)
    console.log("File Picked");
//   await page.waitForTimeout(7000);
//   await pages[1].click("//form[@class='instruct-panel__instruct-form']//label[@class='file-input']");
//   const Fileinput = await pages[1].locator("//form[@class='instruct-panel__instruct-form']//label[@class='file-input']");
//   await Fileinput.setInputFiles('D:/Demo/AA.txt');
 } catch (error) {
   console.error("File not uploaded");
 }
   await pages[1].waitForSelector("//div[@class='instruct-panel__buttons-container']//button[@class='instruct-panel__add-button']", { state: 'visible' , });
   await pages[1].click("//div[@class='instruct-panel__buttons-container']//button[@class='instruct-panel__add-button']");

  await pages[1].click("//div[@class='accordian__panel-header']//span[text()='View Edit Log']");
  await pages[1].waitForSelector("//div[@data-name='edit-log']//li[@data-id='2']", { state: 'visible' , });
  await pages[1].click("//div[@data-name='edit-log']//li[@data-id='2']");
  await pages[1].waitForSelector("//div[@class='edit-log__item-container']//div[@class='edit-log__comment']//span[text()='Add comment']", { state: 'visible'});
  console.log('The END');
});

//in this step add this xpath as selection a text //div[text()='To report a case series of children with central retinal vein occlusion (CRVO) showing a high prevalence of crowded optic disks with minimal cupping.']

