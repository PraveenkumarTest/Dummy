const { error } = require('console');

class Dropdown {
  constructor(pages) {
    this.pages = pages;
  }

  async  selectVisibleTextFromDropdown(page, elementPath, value) {
    try {
        // Wait for the element to be present and visible
        await page.waitForSelector(elementPath);
        // Select the option by visible text
        await page.selectOption(elementPath, { label: value });
        } catch (error) {
        // Log the failure
        console.log('Selection failed:', error);
        // test.fail('Selection failed:', error.message);
    }
}
async  selectVisibleValueFromDropdown(page, elementPath, value) {
    try {
        // Wait for the element to be present and visible
        await page.waitForSelector(elementPath);
        // Select the option by value
        await page.selectOption(elementPath, { value: value });
        // return true; // If no exception is thrown, return true
    } catch (error) {
        // Log the failure
        console.log('Selection failed:', error);
        // return false; // If an exception occurs, return false
    }
}	
async selectFromDropdownWithIndex(page, elementPath, index) {
  let flag = false;
  try {
    // Wait for the dropdown to be available
    await page.waitForSelector(elementPath);
    // Select the dropdown element
    const dropdown = await page.$(elementPath);
    // Get all options in the dropdown
    const options = await dropdown.$$('option');
    // Check if the index is within range
    if (index >= 0 && index < options.length) {
      // Select the option by index
      await dropdown.selectOption({ index: parseInt(index) });
      flag = true;
    } else {
      console.log('Index out of range');
    }
  } catch (e) {
    console.error('Error:', e.message);
  }
  return flag;
}
}
module.exports = Dropdown;
