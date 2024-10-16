const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test('get started link', async ({ browser }) => {
  const context = await browser.newContext();
  const page = await context.newPage();
  
  await page.goto("https://elsevierqa.proofcentral.com/en-us/landing-page.html?token=cc4f80cb4b20e2f57a051701f2b3dc");
//   await page.waitForTimeout(6000);
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
  } catch (error) {
    console.error('Error while waiting for or clicking the close button:', error);
  }
  // To take screenshot
  await  pages[1].screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()+'UIpage.png'})
  await  pages[1].screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()+'UIpage1.png'})
  // Full page screenshot
  await  pages[1].screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()+'Fullpage.png',Fullpage:true})
  await page.waitForTimeout(10000);

  // Particular element  screenshot
  const elementt = await pages[1].locator("//div[@class='split-pane__right-pane']").screenshot({path:'C:/Demo/tests/Screenshot/'+Date.now()})
  
})
