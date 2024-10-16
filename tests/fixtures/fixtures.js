import { test as base } from 'playwright-bdd';
import { editorPage } from '../pages/editorPage';

let sharedPage;
let sharedBrowserContext;

export const test = base.extend({
    editorsPage: async ({ browser }, use) => {
        if (!sharedBrowserContext) {
            sharedBrowserContext = await browser.newContext();
            sharedPage = await sharedBrowserContext.newPage();
            await sharedPage.goto(process.env.URL);
        }                
        const pageObject = new editorPage(sharedPage);
        await use(pageObject);
    }
});