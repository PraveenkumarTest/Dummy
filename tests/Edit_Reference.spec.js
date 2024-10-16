const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');
const Action =require('./Base/Action');
const Insert = require('./Base/Insert');
const scrollIntoView = require('./Base/Scrollintoview');
const Basekeyboard = require('./Base/Keyboardaction');
const Dropdown = require('./Base/Dropdown');
const Typee = require('./Base/typetext');
const typetext = require('./Base/typetext');
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
     // Hopscotch close click
  await pages[1].waitForSelector("//button[@class='hopscotch-bubble-close hopscotch-close']");
  await pages[1].click("//button[@class='hopscotch-bubble-close hopscotch-close']");
  console.log('Clicked on the close button.');
 } catch (error) {
  console.error('Error while waiting for or clicking the close button:', error);
}
    await pages[1].waitForTimeout(5000);
            // Edit Fronmatter
//     await pages[1].waitForSelector("//button[@class='contrib-container__fm-edit-btn']", {state:'visible'});
//     await pages[1].click("//button[@class='contrib-container__fm-edit-btn']");
//     await pages[1].click("//*[@data-attr-id='au1']//*[@class='author-list__item-edit']");
//     await page.waitForTimeout(5000);

// try {
    const typ = new typetext(pages[1]);
//       typ.type1("//input[@class='author-form__surname']",'Firstname',pages[1]);
//       await pages[1].waitForTimeout(5000);

//       typ.type1("//input[@class='author-form__first-name']",'Secoundname',pages[1]);
//       await pages[1].waitForTimeout(5000);
   
// } catch (error) {
//     console.log(error);
// }
//     const scrl = new scrollIntoView(pages[1]);
//     scrl.scrollIntoView1("//input[@id='aff1']");

//     await pages[1].waitForSelector("//*[@class='author-form__aff-list' and @data-attr-id='aff2']//label[@class='reference-control reference-control--checkbox']", {state:'visible'});
//     await pages[1].click("//*[@class='author-form__aff-list' and @data-attr-id='aff2']//label[@class='reference-control reference-control--checkbox']");
//     await pages[1].click("//button[@class='author-form__update-btn']");
//     await pages[1].click("//*[@class='front-matter-container__done-btn']");    
//     await pages[1].waitForTimeout(5000);

//Edit refernce
// try {
try {
    // To edit an Reference
    const scrl = new scrollIntoView(pages[1]);
     await pages[1].waitForTimeout(5000);
     scrl.scrollIntoView1("(//*[@class='csl-entry clearfix']//span[@data-publication-type='journal'])[1]");
     await pages[1].waitForSelector("(//button[@class='fp__reference__more__icon'])[1]");
     await pages[1].click("(//button[@class='fp__reference__more__icon'])[1]");
     await pages[1].waitForSelector("(//button[@class='fp__reference__edit'])[1]");
     await pages[1].waitForTimeout(2000);
     await pages[1].click("(//button[@class='fp__reference__edit'])[1]");
     console.log("clicked edit");
     await pages[1].waitForTimeout(5000);
     await pages[1].waitForSelector("//div[@class='reference-panel__edit-container']//div[@class='rich-text-editor__content']", {state:'visible'});
     typ.type1("//div[@class='reference-panel__edit-container']//div[@class='rich-text-editor__content']",'SRS',pages[1]);
     await pages[1].waitForTimeout(3000);
     await pages[1].click('//*[@class="freetext__btn freetext__add"]');
     await pages[1].waitForTimeout(10000);
} catch (error) {
    console.log(error);
}
});