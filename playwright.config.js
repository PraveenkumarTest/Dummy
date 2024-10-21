// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');
import dotenv from 'dotenv';

const fs = require('fs');
const TEST_RUN_UUID = '12345-abcde';

const testDir = defineBddConfig({  
  importTestFrom: 'tests/fixtures/fixtures.js',
  paths: ['tests/features/editor.feature'],
  require: ['tests/steps/editorsteps.js'],
  disableWarnings: { importTestFrom: true }
});

// const testDir = defineBddConfig({  
//   features: 'tests/features/editor.feature',
//   steps: ['tests/steps/editorsteps.js', 'tests/fixtures/fixtures.js']
// });

dotenv.config({
  path: `./env/.env.${process.env.ENV}`
})

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir,
  /* Run tests in files in parallel */
  fullyParallel: false,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 1 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
            ['list'],
            ['html',{ outputFolder:'XML_report'}],
            ['@estruyf/github-actions-reporter'],
            [
              'playwright-testmo-reporter',
              {
                outputFile: 'testmo/testmo.xml', // Optional: Output file path. Defaults to 'testmo.xml'.
                embedBrowserType: false, // Optional: Embed browser type in the XML file. Defaults to false.
                embedTestSteps: true, // Optional: Embed test steps in the XML file. Defaults to true.
                testStepCategories: ["hook","expect","pw:api","test.step"], // Optional: Test step categories to include in the XML file. Defaults to ["hook","expect","pw:api","test.step"]. Possible options are "hook", "expect", "pw:api", "test.step".
                testTitleDepth: 1, // Optional: Test case title depth to report in the XML file. Defaults to 1. Increase this to 2 include suite name. Increase this even further to include the path.
                includeTestSubFields: false, // Optional: Include test sub fields in the XML file. Defaults to false.
                attachmentBasePathCallback: (basePath) => `http://playwright-s3.services.mycompany.example:9000/test/${TEST_RUN_UUID}/` + basePath.split(/[\\/]/g).join('/'), // Optional: Specify a callback which accepts and returns a string to generate a custom attachment base path. Useful for referring to an artifact storage location for example.
              }
            ],
            ['allure-playwright', {outputFolder:'my-allure-results'}]       
],
 
// reporter: [
//   ['list'],
//   ['html', { filename: 'my-report-{{timestamp}}.html', outdir: './Reports/html-reports' }],
//   ['allure-playwright', { outputFolder: 'my-allure-results' }]
// ],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace:      'retain-on-failure',
    screenshot: 'only-on-failure',
    video:      'retain-on-failure',
    launchOptions: {
      
      //args: ["--start-maximized"],
      args:['--window-size=1280,720']
    }
  },
  timeout : 200000,
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
/*
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
*/
    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
  
});

