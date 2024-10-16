const { test, expect } = require('@playwright/test');
const Insert = require('./Base/Insert'); // Ensure correct path
const Action =require('./Base/Action');
const click =require('./Base/clk');
const clk = require('./Base/clk');

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
  await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']");
  // await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");

  const ck = new clk(pages[1]);
  ck.click("//button[@class='hopscotch-bubble-close hopscotch-close']")
  // ck.click("//button[@class='hopscotch-bubble-close hopscotch-close']");

  console.log('Clicked on the close button.');
 } catch (error) {
  console.error('Error while waiting for or clicking the close button:', error);
}
  await pages[1].waitForTimeout(3000);
  try {
    // To place an cursor by using insert cursor method
    const ins = new Insert(pages[1]);
    const boundingBox = await ins.insertcursor('(//div[@data-html-name="para"])[4]', 5);
    if (boundingBox) {
      console.log('Cursor inserted successfully.');
      await pages[1].waitForTimeout(4000);

      // Add Some insert text in Para
      await pages[1].keyboard.type('And')
      await pages[1].waitForTimeout(3000);
    } else {
      console.error('Failed to insert cursor.');
    }
  } catch (error) {
    console.error('Error during cursor insertion:', error);
  }

  // To delete some words by using selection
  await pages[1].waitForTimeout(2000);
  const action1 = new Action(pages);
  action1.selectrange('(//div[@data-html-name="para"])[4]',0,2)
  await pages[1].keyboard.press('Backspace');
  await pages[1].waitForTimeout(15000);

  //Reresh the link
  await pages[1].reload();
  await pages[1].waitForTimeout(10000);
  await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']");

  await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");

  // TO verify edits are applied in UI
  await pages[1].waitForSelector("//span[@data-format='insert' and text()='And']", { state: 'visible' , });
  await pages[1].waitForSelector("//span[@data-format='delete' and text()='Th']", { state: 'visible' , });
});









