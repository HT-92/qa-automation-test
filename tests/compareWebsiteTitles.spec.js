import {test, expect} from '@playwright/test';
import data from '../data/pages.json';

test('Compare the titles of two separate webpages by using external data', async ({ page }) => {
    await page.goto(data.page1URL);
    const title1 = await page.title();
    expect(title1).toBe(data.page1Name);

    await page.goto(data.page2URL);
    const title2 = await page.title();
    expect(title2).toBe(data.page2Name);
});