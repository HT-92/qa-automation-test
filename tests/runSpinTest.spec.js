import {test, expect} from '@playwright/test';
import data from '../data/pages.json';

test('Open Game page and click Spin button', async ({ page }) => {
    await page.goto(data.pageURL);
    const title1 = await page.title();
    expect(title1).toBe(data.pageName);
    await page.frameLocator('iframe[name="gameIframe"]').locator('#spin-button').click();

});