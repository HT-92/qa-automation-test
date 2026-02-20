/*
module.exports = {
    testDir: './tests',
    timeout: 30000,
    use: {
        headless: true
    },
    reporter: [['html', {outputFolder: 'playwright-report', open: 'never'}]]
    
};

*/

const {defineConfig, devices} = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    timeout: 30 * 1000,

    expect: {
        timeout: 5000,
    },

    forbidOnly: !!process.env.CI,

    retries: process.env.CI ? 2 : 0,

    workers: process.env.CI ? 2 : undefined,
    
    reporter: [
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['junit', { outputFile: 'test-results/results.xml'}],
        ['list'],
    ],

    use: {
        headless: true,

        baseURL: 'http://localhost:3000',

        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
        trace: 'on-first-retry',

        actionTimeout: 0,
        navigationTimeout: 30 * 1000,
    },

    projects: [
        {
            name: 'Chromium',
            use: { ...devices['Desktop Chrome'] },
        },
        {
            name: 'Firefox',
            use: { ...devices['Desktop Firefox'] }, 
        },
        {
            name: 'Webkit',
            use: { ...devices['Desktop Safari'] },
        },
    ],
});

/*
Always generate html report:

import { defineConfig } from '@playwright/test';

export default defineConfig({
    reporter: [['html', {open: 'never' }]],
});

Other options:
'always' → always opens
'never' → never auto-opens
'on-failure'

*/