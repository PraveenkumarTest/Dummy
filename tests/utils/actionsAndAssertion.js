import { test, expect } from '@playwright/test';
import { sharedBrowserContext } from '../fixtures/fixtures';
// const path = require('path'); // Import the path module
import * as fs from 'fs';
require('dotenv').config({ path: 'D:/XML-Reg2/XML_BDD_UI/env/.env.qa' });

const assert = require('assert');
const defaultTimeout = 30000;
export class actionAndAssertion {

    constructor(page) {
        this.page = page;
    }

    async takeElementScreenShot(selector, imgpath, imagename) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Capturing the screenshot with selector:', selector);
            await this.page.locator(selector).screenshot({ path: imgpath + Date.now() + imagename });
            console.log("Screenshot is captured")
            return true;
        } catch (error) {
            console.log('Unable to the screenshot: ', selector, error);
            return false;
        }
    }

    async visiblePageScreenshot(imgpath, imagename) {
        try {
            await this.page.screenshot({ path: imgpath + Date.now() + imagename })
            console.log("Screenshot captured")
        }
        catch (error) {
            console.log("Unable to take screenshot", error)
        }
    }

    async fullPageScreenshot(imgpath, imagename) {
        try {
            await this.page.screenshot({ path: imgpath + Date.now() + imagename, fullPage: true })
            console.log("Screenshot captured")
        }
        catch (error) {
            console.log("Unable to take screenshot", error)
        }
    }

    async elementClick(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking element with selector:', selector);
            await this.page.locator(selector).click();
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async elementFill(selector, value, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Typing the content in the element with selector:', selector);
            await this.page.locator(selector).fill(value);
            console.log("Text is entered successfully");
            return true;
        } catch (error) {
            console.log('Unable to enter the text in the element with selector:', selector, error);
            return false;
        }
    }

    async typeCharacters(selector, value, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Typing the content in the element with selector:', selector);
            await this.page.locator(selector).pressSequentially(value);
            console.log("Text is entered successfully");
            return true;
        } catch (error) {
            console.log(`Unable to enter the text in the element with selector: ${selector}`, error);
            return false;
        }
    }

    async elementCheck(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Checking element with selector:', selector);
            await this.page.locator(selector).check();
            console.log("Element checked successfully");
            return true;
        } catch (error) {
            console.log('Unable to check the element with selector:', selector, error);
            return false;
        }
    }

    async insertCursor(xpath, setStart) {

        try {
            const boundingBox = await this.page.evaluate(({ xpath, setStart }) => {
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
            }, { xpath, setStart });

            if (boundingBox) {
                // Perform mouse actions on the bounding box
                await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);
                await this.page.mouse.down(); // Press the mouse button
                await this.page.waitForTimeout(100); // Wait for a short time
                await this.page.mouse.up(); // Release the mouse button
            }
            //this.page.waitForTimeout(20000);
            return boundingBox;


        } catch (error) {
            console.log(`Error getting insert cursor for element with XPath: ${xpath}`, error);
            return null;

        }
    }


    async singleSelectWithValue(selector, value, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Selecting the dropdown value with selector:', selector);
            await this.page.locator(selector).selectOption(value);
            console.log('Dropdown value is selected successfully');
            return true;
        } catch (error) {
            console.log('Unable to select the value with selector:', selector, error);
            return false;
        }
    }

    async wholeSelection(paragraphXPath) {
        try {
            const boundingBox = await this.page.evaluate(async (paragraphXPath) => {
                // Find the paragraph element using XPath
                const paragraph = document.evaluate(paragraphXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                // Check if the paragraph element is found
                if (paragraph) {
                    paragraph.scrollIntoView();
                    // Create a range to select the entire paragraph
                    const range = document.createRange();
                    range.selectNodeContents(paragraph);

                    // Create a selection object and select the range
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);

                    // Get the bounding box of the selected range
                    return range.getBoundingClientRect();
                }
                return null;
            }, paragraphXPath);

            if (boundingBox) {
                // Perform right-click action at the center of the bounding box
                await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);

                // Prevent default context menu action
                await this.page.evaluate(() => {
                    document.addEventListener('contextmenu', (event) => {
                        event.preventDefault();
                    });
                });

                // Perform right-click action
                await this.page.mouse.down({ button: 'right' });

                // Drag the mouse to the end of the paragraph
                await this.page.mouse.move(boundingBox.x + boundingBox.width, boundingBox.y + boundingBox.height / 2);

                // Release the right-click mouse button
                await this.page.mouse.up({ button: 'right' });
            }
            return boundingBox;
        } catch (error) {
            console.log(`Error on selection in paragraph with XPath: ${paragraphXPath}`, error);
            return null;
        }
    }

    async selectionByRange(paragraphXPath, startIndex, endIndex) {
        try {
            const boundingBox = await this.page.evaluate(async ({ paragraphXPath, startIndex, endIndex }) => {
                // Find the paragraph element using XPath
                const paragraph = document.evaluate(paragraphXPath, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;

                // Check if the paragraph element is found
                if (paragraph) {
                    paragraph.scrollIntoView();
                    // Remove unwanted spaces in the paragraph
                    paragraph.textContent = paragraph.textContent.replace(/\s+/g, ' ').trim();

                    // Ensure the indices are within the bounds of the text content
                    const textLength = paragraph.textContent.length;
                    const validStartIndex = Math.min(startIndex, textLength - 1);
                    const validEndIndex = Math.min(endIndex, textLength);

                    // Create a range to select the text range
                    const range = new Range();
                    range.setStart(paragraph.firstChild, validStartIndex);
                    range.setEnd(paragraph.firstChild, validEndIndex);

                    // Create a selection object and select the range
                    const selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);

                    // Get the bounding box of the selected range
                    return range.getBoundingClientRect();
                }
                return null;
            }, { paragraphXPath, startIndex, endIndex });

            if (boundingBox) {
                // Perform right-click action at the center of the bounding box
                await this.page.mouse.move(boundingBox.x + boundingBox.width / 2, boundingBox.y + boundingBox.height / 2);

                // Prevent default context menu action
                await this.page.evaluate(() => {
                    document.addEventListener('contextmenu', (event) => {
                        event.preventDefault();
                    });
                });

                // Perform right-click action
                await this.page.mouse.down({ button: 'right' });

                // Drag the mouse to the end of the word
                await this.page.mouse.move(boundingBox.x + boundingBox.width, boundingBox.y + boundingBox.height / 2);

                // Release the right-click mouse button
                await this.page.mouse.up({ button: 'right' });
            }
            return boundingBox;
        } catch (error) {
            console.log(`Error on selecting in text with XPath: ${paragraphXPath}`, error);
            return null;
        }
    }

    async singleSelectWithLabel(selector, value, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Selecting the dropdown value with selector:', selector);
            await this.page.locator(selector).selectOption({ label: value });
            console.log('Dropdown value is selected successfully');
            return true;
        } catch (error) {
            console.log('Unable to select the value with selector:', selector, error);
            return false;
        }
    }

    async multipleSelect(selector, values, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Selecting the dropdown value with selector:', selector);
            await this.page.locator(selector).selectOption([values]);
            console.log('Dropdown value is selected successfully');
            return true;
        } catch (error) {
            console.log('Unable to select the value with selector:', selector, error);
            return false;
        }
    }

    async mouseClick(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking the element with selector:', selector);
            await this.page.locator(selector).click();
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async mouseDoubleClick(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking the element with selector:', selector);
            await this.page.locator(selector).dblclick();
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async mouseRightClick(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking the element with selector:', selector);
            await this.page.locator(selector).click({ button: 'right' });
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async mouseLeftClick(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking the element with selector:', selector);
            await this.page.locator(selector).click({ button: 'left' });
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async mouseHover(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Hover the element with selector:', selector);
            await this.page.locator(selector).hover();
            console.log("Mouse hover happened successfully");
            return true;
        } catch (error) {
            console.log('Mousehover action not happened the element with selector:', selector, error);
            return false;
        }
    }

    async forceClick(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking element with selector:', selector);
            await this.page.locator(selector).click({ force: true });
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async fileUpload(selector, path, filename, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Uploading the file with selector:', selector);
            await this.page.locator(selector).setInputFiles(path.join(path, filename));
            console.log("File uploaded successfully");
            return true;
        } catch (error) {
            console.log('Unable to upload the file with selector:', selector, error);
            return false;
        }
    }

    async dragAndDrop(sourceselector, destinationselector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Drag and drop the selector:', selector);
            await this.page.locator(sourceselector).dragTo(page.locator(destinationselector));
            console.log("Drag and drop happened successfully");
            return true;
        } catch (error) {
            console.log('Unable to drag and drop the selector:', selector, error);
            return false;
        }
    }

    async mouseDragAndDrop(sourceselector, destinationselector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Drag and drop the selector:', selector);
            await this.page.locator(sourceselector).hover();
            await this.page.mouse.down();
            await this.page.locator(destinationselector).hover();
            await this.page.mouse.up();
            console.log("Drag and drop happened successfully");
            return true;
        } catch (error) {
            console.log('Unable to drag and drop the selector:', selector, error);
            return false;
        }
    }

    async placeCurs(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Clicking the element with selector:', selector);
            await this.page.locator(selector).click({ position: { x: 0, y: 1 } });
            console.log("Element clicked successfully");
            return true;
        } catch (error) {
            console.log('Unable to click the element with selector:', selector, error);
            return false;
        }
    }

    async keyAction(key) {

        try {
            await this.page.keyboard.press(key);
            console.log("Key actions performed successfully");
            return true;
        } catch (error) {
            console.log('Unable to perform key actions', error);
            return false;
        }
    }

    async waitTime(time) {
        await this.page.waitForTimeout(time);
    }

    async elementVisible(selector, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Verifying the element with selector:', selector);
            const visible = await this.page.locator(selector);
            await expect.soft(visible).toBeVisible();
            console.log("Element visibled successfully");
            return true;
        } catch (error) {
            console.log('Element is not visible with selector:', selector, error);
            return false;
        }
    }
    async elementVisible1(selector) {
        try {
            const visible = await this.page.locator(selector)
            await expect.soft(visible).toBeVisible()
            //await expect(this.page.locator(selector)).toBeVisible()         
            console.log("Element is visible")
        }

        catch (error) {
            console.error("Element is not visible", error)
        }
    }

    async elementDisabled(selector) {
        try {
            await expect.soft(this.page.locator(selector)).toBeDisabled()
            console.log("Element is Disabled")
        }

        catch (error) {
            console.error("Element is not disabled", error)
        }
    }

    async elementEnabled(selector) {
        try {
            const enabled = await this.page.locator(selector)
            await expect(enabled).toBeEnabled()
            //await expect(this.page.locator(selector)).toBeEnabled().toBeTruthy()
            console.log("Element is Enabled")
        }

        catch (error) {
            console.error("Element is not enabled", error)
        }
    }

    async elementChecked(selector) {
        try {
            const checked = await this.page.locator(selector)
            await expect(checked).toBeChecked()
            //await expect(this.page.locator(selector)).toBeChecked()
            console.log("Element is Checked")
        }

        catch (error) {
            console.error("Element is not checked", error)
        }

    }
    // To get wether the text is present or not
    async getElementAttribute(selector, attributeName, expectedValue) {
        try {
            const element = await this.page.locator(selector);
            const attributeValue = await element.getAttribute(attributeName);
            expect(attributeValue).toBe(expectedValue);
            console.log(attributeValue);
            return attributeValue;
        } catch (error) {
            console.error(error);
        }
    }
    async wait() {
        await new Promise(resolve => setTimeout(resolve, 15000));
    }

    async selectText(selector, startPosition, endPosition) {
        const locator = await this.page.locator(selector);
        await locator.evaluate(
            (element, { startPosition, endPosition }) => {
                const textNode = element.childNodes[0];
                const content = textNode.textContent;
                if (content && startPosition >= 0 && endPosition <= content.length && startPosition < endPosition) {
                    const range = document.createRange();
                    range.setStart(textNode, startPosition);
                    range.setEnd(textNode, endPosition);
                    const selection = document.getSelection();
                    selection?.removeAllRanges();
                    selection?.addRange(range);

                }
            },
            { startPosition, endPosition }
        );
    }
    async insertText(selector, position) {
        const locator = await this.page.locator(selector);
        await locator.evaluate(
            (element, { position }) => {
                const textNode = element.childNodes[0];
                const content = textNode.textContent;
                if (content && position >= 0 && position <= content.length) {
                    const selection = document.getSelection();
                    selection?.removeAllRanges();
                    selection?.setPosition(textNode, position);

                }
            },
            { position }
        );
    }
    async TwokeyAction(key1, key2) {
        try {
            await this.page.keyboard.down(key1);
            await this.page.keyboard.press(key2);
            await this.page.keyboard.up(key1);
            console.log("Key actions performed successfully");
            return true;
        } catch (error) {
            console.log('Unable to perform key actions', error);
            return false;
        }
    }
    async iterationkeyAction(key, iterationValue) {
        for (let i = 0; i < iterationValue; i++) {
            try {
                await this.page.keyboard.press(key);
                console.log(`Key action performed successfully (${i + 1} of ${iterationValue})`);
            } catch (error) {
                console.log(`Unable to perform key action (${i + 1} of ${iterationValue})`, error);
                return false;
            }
        }
        return true;
    }
    async elementTypeFirst(selector, value, options = {}) {
        const { timeout = 30000, delay = 100 } = options; // Added delay for typing simulation

        try {
            // Locate the element and wait for it to be visible
            const element = this.page.locator(selector).first();
            await element.waitFor({ state: 'visible', timeout });

            // Scroll the element into view
            await element.scrollIntoViewIfNeeded();

            // Type the input text like a user would (with delay between keystrokes)
            await element.type(value, { delay });
            console.log(`Element typed successfully with selector: ${selector} and value: ${value}`);
            return true; // Indicate successful typing
        } catch (error) {
            console.error(`Error typing into element with selector "${selector}" and value "${value}":`, error);
            return false; // Indicate failure to type
        }
    }
    async keyActioninsert(key) {

        try {
            await this.page.keyboard.insertText(key);
            console.log("Key actions performed successfully");
            return true;
        } catch (error) {
            console.log('Unable to perform key actions', error);
            return false;
        }
    }
    async fileUpload1(selector, filePath, filename, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(selector, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(selector, { timeout });
            }
            console.log('Uploading the file with selector:', selector);
            await this.page.locator(selector).setInputFiles(path.join(filePath, filename));
            console.log("File uploaded successfully");
            return true;
        } catch (error) {
            console.log('Unable to upload the file with selector:', selector, error);
            return false;
        }
    }
    async uploadFileByCssLocator(cssLocator, filePath, options = {}) {
        const { waitForVisible = false, timeout = 30000 } = options;
        try {
            if (waitForVisible) {
                await this.page.waitForSelector(cssLocator, { timeout, visible: true });
            } else {
                await this.page.waitForSelector(cssLocator, { timeout });
            }
            await this.page.locator(cssLocator).setInputFiles(filePath);
            console.log("File uploaded successfully");
            return true;
        } catch (error) {
            console.log('Unable to upload the file with CSS locator:', cssLocator, error);
            return false;
        }
    }
    async deleteUrl2FromEnv(envFilePath) {
        try {
          // Read the existing .env.qa file content
          const existingContent = await fs.promises.readFile(envFilePath, 'utf8');
      
          // Use a regular expression to find the URL2 value inside the link
          const url2Regex = /URL2=(.*)/m;
          const match = existingContent.match(url2Regex);
      
          if (match) {
            // Extract the URL2 value
            const url2Value = match[1];
      
            // Remove the URL2 value from the link
            const newContent = existingContent.replace(url2Value, '');
      
            // Write the updated content back to the .env.qa file
            await fs.promises.writeFile(envFilePath, newContent);
      
            console.log('URL2 value deleted from link successfully');
          } else {
            console.log('No URL2 value found in link');
          }
        } catch (error) {
          console.error(`Error deleting URL2 value: ${error}`);
        }
      }
  async getLink(cssLocator, options = {}) {
    const { waitForVisible = false, timeout = 30000 } = options;
    try {
      if (waitForVisible) {
        await this.page.waitForSelector(cssLocator, { timeout, visible: true });
      } else {
        await this.page.waitForSelector(cssLocator, { timeout });
      }
      const link = await this.page.locator(cssLocator).getAttribute('href');
      console.log('Extracted Link:', link);
      const token = link.split('?token=')[1];
      console.log('Extracted Token:', token);
  
      // Update the URL2 variable in the .env.qa file
      const envFilePath = 'D:\\XML_Regression_Final\\XML_BDD_UI\\env\\.env.qa';
      try {
        const existingContent = fs.readFileSync(envFilePath, 'utf8');
        const newContent = existingContent.replace(/^URL2=.*/m, `URL2=${link}`);
        fs.writeFileSync(envFilePath, newContent);
        console.log(`Extracted link written to .env.qa file successfully: ${envFilePath}`);
      } catch (error) {
        console.error(`Error reading or writing to file: ${error}`);
      }
      return { link, token };
    } catch (error) {
      console.log('Unable to extract link with CSS locator:', cssLocator, error);
      return null;
    }
  }
    async switchTab(tabCount, options = {}) {
        const { timeout = 10000 } = options;
        try {
            if (tabCount < 0) {
                throw new Error('Invalid tab count');
            }
            await this.page.waitForTimeout(timeout);
            const pages = this.page.context().pages();
            if (tabCount >= pages.length) {
                throw new Error('Tab count exceeds the number of open tabs');
            }
            const newPage = pages[tabCount];
            await newPage.bringToFront();
            console.log(`Switched to tab ${tabCount}`);
            await newPage.waitForLoadState('networkidle');
            return newPage;
        } catch (error) {
            console.log('Unable to switch to tab:', tabCount, error);
            return null;
        }
    }
    // Import dotenv to load environment variables

async handleWindowsAndCloseParent(options = {}) {
    const { timeout = 30000 } = options; // Default timeout for waiting

    try {
        // Get the URL from the .env file
        const childUrl = process.env.URL2;

        if (!childUrl) {
            throw new Error('URL2 is not defined in the .env file');
        }

        // Open the child tab (new page) by navigating to the URL from the .env file
        const [childPage] = await Promise.all([
            this.page.context().waitForEvent('page', { timeout }), // Wait for new page (child tab) to open
            this.page.evaluate((url) => window.open(url), childUrl) // Opens a new tab with the URL
        ]);

        // Wait for the child page to load completely
        await childPage.waitForLoadState('domcontentloaded', { timeout });

        // Close the parent tab (the current page)
        await this.page.close();

        // Set the child page as the new main page
        this.page = childPage;

        console.log('Successfully switched to the child tab (now treated as the parent tab) at URL: ${childUrl}');

        // Now you can perform actions on the new "parent" (previously child) tab
        // Example: Perform any action on the new page
        await this.page.goto(childUrl); // You can modify this to any action you need

        return true; // Indicate success
    } catch (error) {
        console.error('Error handling windows and closing parent tab:',error);
        return false; // Indicate failure
    }
}

    async closeCurrentWindow(browserContext, tabIndex) {
        try {
          const pages = await browserContext.pages();
          if (pages.length > tabIndex) {
            await pages[tabIndex].close();
          }
          console.log('Current window closed');
          return true;
        } catch (error) {
          console.error('Error closing current window:', error);
          return false;
        }
      }
    // async closeCurrentWindow() {
    //     try {
    //         await this.page.close();
    //         console.log('Current window closed');
    //         return true;
    //     } catch (error) {
    //         console.error('Error closing current window:', error);
    //         return false;
    //     }
    // }
    // async closeCurrentWindow(browserContext) {
    //     try {
    //       const newPage = await browserContext.newPage();
    //       await newPage.goto('about:blank'); // navigate to a blank page
    //       await this.page.close();
    //       console.log('Current window closed');
    //       return true;
    //     } catch (error) {
    //       console.error('Error closing current window:', error);
    //       return false;
    //     }
    //   }
    async waitForTime(time) {
        try {
            await this.page.waitForTimeout(time);
            console.log(`Waited for ${time} milliseconds`);
            return true;
        } catch (error) {
            console.log(`Unable to wait for ${time} milliseconds:`, error);
            return false;
        }
    }
    async waitForTime1(time) {
        try {
          const page = await this.browserContext.newPage(); // create a new page instance
          await page.waitForTimeout(time);
          console.log(`Waited for ${time} milliseconds`);
          return true;
        } catch (error) {
          console.log(`Unable to wait for ${time} milliseconds:`, error);
          return false;
        }
      }
    async closeParentTab(pageTitleOrUrl, options = {}) {
        const { timeout = 30000 } = options;
        try {
            const parentPage = this.page.parent();
            if (parentPage) {
                if (pageTitleOrUrl instanceof RegExp) {
                    if (await parentPage.title() && pageTitleOrUrl.test(await parentPage.title())) {
                        await parentPage.close();
                        return;
                    }
                } else if (typeof pageTitleOrUrl === 'string') {
                    if ((await parentPage.title()) === pageTitleOrUrl || parentPage.url() === pageTitleOrUrl) {
                        await parentPage.close();
                        return;
                    }
                }
            } else {
                console.log('No parent page found');
            }
        } catch (error) {
            console.log('Unable to close parent tab with title or URL:', pageTitleOrUrl, error);
        }
    }
    // async navigateParentToChildTabUrl(element) {
    //     try {
    //         // const pages = this.page.context()
            
    //         const [pagePromise]=await Promise.all([
        
    //             this.page.context.waitForEvent('page'),
    //             await this.page.locator(element).click()
    //         ])
    //         // const parentPage = this.page;
    //         // const childPage = pages.find((page) => page !== parentPage);
    //         // if (childPage) {
    //         //     const childUrl = await childPage.url();
    //         //     await parentPage.goto(childUrl);
    //         // } else {
    //         //     console.log('No child page found');
    //         // }
    //     } catch (error) {
    //         console.log('Unable to navigate parent tab to child tab URL:', error);
    //     }
    // }
    async getTabsInContext(browserContext) {
        try {
          const pages = await browserContext.pages();
          console.log(`Number of tabs in context: ${pages.length}`);
          return pages.length;
        } catch (error) {
          console.error('Error getting tabs in context:', error);
          return null;
        }
      }
      
      async getTabsInBrowser(browser) {
        try {
          const pages = await browser.pages();
          console.log(`Number of tabs in browser: ${pages.length}`);
          return pages.length;
        } catch (error) {
          console.error('Error getting tabs in browser:', error);
          return null;
        }
      }
      async closeBrowser(browserContext) {
        if (!browserContext) {
          console.error('Browser context is undefined');
          return false;
        }
        try {
          await browserContext.close();
          console.log('Browser context closed successfully');
          return true;
        } catch (error) {
          console.error('Error closing browser context:', error);
          return false;
        }
      }
      async closeParentTab() {
        try {
          const pages = await sharedBrowserContext.pages();
          const parentTab = pages[0]; // assume the first page is the parent tab
          await parentTab.close();
          return true;
        } catch (error) {
          console.error('Error closing parent tab:', error);
          return false;
        }
      }
      async closeParentTab1() {
        try {
          const newPage = await sharedBrowserContext.newPage();
          await sharedBrowserContext.pages()[0].close();
          return true;
        } catch (error) {
          console.error('Error closing parent tab:', error);
          return false;
        }
      }
      async openChildAndCloseParent(childUrl) {
        try {
            // Open child window in a new tab
            const [newPage] = await Promise.all([
                this.page.context().waitForEvent('page'), // Listen for new page event
                this.page.evaluate((url) => window.open(url), childUrl) // Open the child window
            ]);

            // Wait for the new page (child) to load
            await newPage.waitForLoadState('domcontentloaded');

            // Close the parent tab
            await this.page.close();

            // Now the child page is active; return the new page
            return newPage;
        } catch (error) {
            console.error('Error while switching to child and closing parent:', error);
        }
    }
    async closeParentAndContinueActions() {
        try {
            // Ensure we have the current active page (parent tab)
            const parentPage = this.page;

            // Close the parent tab
            await parentPage.close();
            console.log('Parent tab closed.');

            // Wait for the child tab to become the active page
            const childPage = await parentPage.context().pages().find(page => page !== parentPage);
            if (!childPage) {
                throw new Error('Child page not found after closing the parent page.');
            }

            // Wait for the child page to be fully loaded (optional)
            await childPage.waitForLoadState('domcontentloaded');

            console.log('Now working with the child tab.');

            // Now the child page is active; return the new page
            return childPage;
        } catch (error) {
            console.error('Error while closing the parent tab and continuing actions in the child tab:', error);
            throw error; // Rethrow the error for better error handling
        }
    }
   async  ElementPresentOrNot(selector, options = {}) {
    const { waitForVisible = false, timeout = defaultTimeout } = options;
   try {
    if (waitForVisible) {
      await this.page.waitForSelector(selector, { timeout, visible: true });
    } else {
      await this.page.waitForSelector(selector, { timeout });
    }
    console.log(`Verifying the element with selector: ${selector}`);
    const element = await this.page.locator(selector);
    assert.ok(element, `Element not found with selector: ${selector}`);
    console.log(`Element present successfully: ${selector}`);
  } catch (error) {
    console.error(`Element not present with selector: ${selector}`, error);
    console.error('Error: Element not present. Closing browser...');
    await browser.close();
    throw new Error(`Element not present: ${selector}`);
  }
}
async elementNotVisible(selector, options = {}) {
    const { waitForNotVisible = false, timeout = 30000 } = options;
    try {
        if (waitForNotVisible) {
            await this.page.waitForSelector(selector, { timeout, state: 'hidden' });
        } else {
            await this.page.waitForSelector(selector, { timeout });
        }
        console.log('Verifying the element with selector:', selector);
        const notVisible = await this.page.locator(selector);
        await expect.soft(notVisible).not.toBeVisible();
        console.log("Element not visible successfully");
        return true;
    } catch (error) {
        console.log('Element is visible with selector:', selector, error);
        return false;
    }
}
    }






