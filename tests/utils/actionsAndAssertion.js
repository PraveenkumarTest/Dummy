import { test, expect } from '@playwright/test';

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
                console.log(`Key action performed successfully (${i+1} of ${iterationValue})`);
              } catch (error) {
                console.log(`Unable to perform key action (${i+1} of ${iterationValue})`, error);
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

    }





