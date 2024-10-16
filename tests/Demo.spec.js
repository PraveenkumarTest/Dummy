// @ts-check
const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');
const Action =require('../tests/Base/Action');
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
    await pages[1].waitForTimeout(10000);
    // Get the title of the second tab
    const secondTabTitle = await pages[1].title();
    console.log('Title of the second tab:', secondTabTitle);
    
    // Now you're on the second tab and can interact with it
  } else {
    console.error("There are not enough tabs open to switch to the second tab.");
  }
 try {
    // Hopscotch close
  await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']");
  await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");
  console.log('Clicked on the close button.');
 } catch (error) {
  console.error('Error while waiting for or clicking the close button:', error);
}
await pages[1].waitForTimeout(5000);
// To select an particular text and to apply bold
const action = new Action(pages);
action.selectrange('(//div[@data-html-name="para"])[2]',10,12)
await pages[1].waitForTimeout(8000);
await pages[1].click("//*[@class='contextual-menu contextual-menu--show']//*[@data-plugin-name='bold']");
await pages[1].click("//div[@class='accordian__panel-header']//span[text()='View Edit Log']");
//await pages[1].click("//li[@class='tab-panel__item tab-panel__item--active']//span[text()='Edits']");

//  await pages[1].waitForSelector("//span[@class='edit-log__insert' and text()='First']", { state: 'visible'});
});

//in this step add this xpath as selection a text //div[text()='To report a case series of children with central retinal vein occlusion (CRVO) showing a high prevalence of crowded optic disks with minimal cupping.']

