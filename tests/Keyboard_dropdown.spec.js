
const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');
const Action =require('./Base/Action');
const Insert = require('./Base/Insert');
const clk = require('./Base/clk');
const Basekeyboard = require('./Base/Keyboardaction');
const Dropdown = require('./Base/Dropdown');

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
  await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");
  console.log('Clicked on the close button.');
 } catch (error) {
  console.error('Error while waiting for or clicking the close button:', error);
}
try {
    await pages[1].waitForTimeout(3000);
    const ins = new Insert(pages[1]);
    const boundingBox = await ins.insertcursor('(//div[@data-html-name="para"])[6]', 5);
    if (boundingBox) {
      console.log('Cursor inserted successfully.');
      await pages[1].waitForTimeout(4000);

            // Add Some insert text in Para
      // const keyboardaction = new Basekeyboard(pages[1]);
      // await keyboardaction.typetext('Check');
    //   await pages[1].keyboard.type('Check')
    //   await pages[1].waitForTimeout(3000);
    } else {
      console.error('Failed to insert cursor.');
    }
  } catch (error) {
    console.error('Error during cursor insertion:', error);
  }
             // To check dropdown by selectbyvisibletext
try {
  await pages[1].waitForTimeout(5000);
  await pages[1].click("(//button[@data-tooltip-title='Link'])[1]");
  const drop = new Dropdown(pages[1]);
  await pages[1].waitForSelector("//div[@class='link-editor']",{ state: 'visible' });
  await pages[1].waitForTimeout(5000);
  drop.selectVisibleTextFromDropdown(pages[1],"//select[@id='link.editor.link.type.id']",'Database Link');
  //drop.selectVisibleTextFromDropdown("//select[@id='link.editor.link.type.id']",'Database Link');
  await pages[1].waitForTimeout(5000);
} catch (error) {
  console.log(error + 'Not worked Dropdown')
}
try {
//            // To check dropdown by selectbyvisiblevalue
    await pages[1].waitForTimeout(5000);
    await pages[1].click("(//button[@data-tooltip-title='Link'])[1]");
     const drop = new Dropdown(pages[1]);
     await pages[1].waitForTimeout(5000);
     await pages[1].waitForSelector("//div[@class='link-editor']",{ state: 'visible' });
  //  drop.selectVisibleTextFromDropdown(pages[1],"//select[@id='link.editor.link.type.id']",'Database Link');
  drop.selectVisibleValueFromDropdown(pages[1],"//select[@id='link.editor.link.type.id']",'db-link');
  await pages[1].waitForTimeout(5000);
} catch (error) {
  
}
try {
  // To check dropdown by selectbyvisiblevalue
     await pages[1].waitForTimeout(5000);
     await pages[1].click("(//button[@data-tooltip-title='Link'])[1]");

     const drop = new Dropdown(pages[1]);
     await pages[1].waitForTimeout(3000);
     await pages[1].waitForSelector("//div[@class='link-editor']",{ state: 'visible' });
     console.log("Selector option by index");
     drop.selectFromDropdownWithIndex(pages[1],"//select[@id='link.editor.link.type.id']", 2);
     //drop.selectFromDropdownWithIndex(pages[1],"//select[@id='link.editor.link.type.id']",2)
     await pages[1].waitForTimeout(5000);
} catch (error) { 
  console.log(error);
}
});