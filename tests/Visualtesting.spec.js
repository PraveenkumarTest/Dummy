const { test, expect } = require('@playwright/test');
const { timeout } = require('../playwright.config');

test.only('Link open', async ({browser}) => {
    const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://github.com/login");
  // to take screenshot Excepted
  await expect (page).toHaveScreenshot('github.png');
  await page.waitForTimeout(3000);
  try {
    await page.locator('#login_field').click();
    await page.locator('#login_field').fill('1234567890');
    // to take screenshot Actual
    await expect (page).toHaveScreenshot('github.png');
    console.log('Screenshot compared passed')
  } catch (error) {
    console.log( error +'Compare failed');
  }

} )
