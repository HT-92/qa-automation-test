module.exports = {
    testDir: './tests',
    timeout: 30000,
    use: {
        headless: true
    },
    reporter: [['html', {outputFolder: 'report'}]]
};


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