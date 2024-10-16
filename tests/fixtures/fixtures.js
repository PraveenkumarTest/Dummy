import { test as base } from 'playwright-bdd';
import { editorPage } from '../pages/editorPage';
require('dotenv').config({ path: 'D:/XML-Reg2/XML_BDD_UI/env/.env.qa' });

let sharedBrowserContext;
let sharedPage;

export const test = base.extend({
    editorsPage: async ({ browser }, use) => {
        if (!sharedBrowserContext) {
            sharedBrowserContext = await browser.newContext();
            sharedPage = await sharedBrowserContext.newPage();
            await sharedPage.goto(process.env.URL1); // Navigate to the parent page
        }
        const pageObject = new editorPage(sharedPage);
        await use(pageObject); // Provide the page object to tests
    },
});

export { sharedBrowserContext, sharedPage };



// import { test as base } from 'playwright-bdd';
// import { editorPage } from '../pages/editorPage';

// let sharedPage;
// let sharedBrowserContext;

// export const test = base.extend({
//     editorsPage: async ({ browser }, use) => {
//         if (!sharedBrowserContext) {
//             sharedBrowserContext = await browser.newContext();
//         }
//         const page = await sharedBrowserContext.newPage();
//         await page.goto(process.env.URL1);
//         const pageObject = new editorPage(page);
        
//         // Extract the link and store it in env1
//         const extractedLink = await page.url();
//         process.env.env1 = extractedLink;
        
//         await use(pageObject);
//     }
// });
// export { sharedBrowserContext };