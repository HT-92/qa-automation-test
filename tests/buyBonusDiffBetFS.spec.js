import {test, expect} from '@playwright/test';
import data from '../data/pages.json';

test ('Buy Bonus with different bet leading to FS', async ({ page }) => {
    await page.goto(data.pageURL);
    const title3 = await page.title();
    expect(title3).toBe(data.pageName);

        //fixture to make sure the iframe loaded
        const gameFrame = page.frameLocator('iframe[src*="game-ui/index.html?gin=464"]');
        await gameFrame.locator('body').waitFor({ timeout: 15000 });

        //fixture to check if Bet button is visible
        const locator = page.frameLocator('iframe[name="gameIframe"]').locator('#spin-button');
        await expect(locator).toBeVisible();
        
        //fixture to always turn sound off
        await page.frameLocator('iframe[name="gameIframe"]').locator('#sound-button').click();
    

        //fixture to select a default bet
        const frame = page.frameLocator('iframe[name="gameIframe"]');
        
            await frame.locator('#bet-option-button').click();
        
        const bet100 = frame.locator('#bet-option-100');
        const bet20 = frame.locator('#bet-option-20');

        if (await bet100.isVisible()) {
            await bet100.click();
        } else {
            await bet20.click();
        }
        
        /*const defaultBetSelection = page.frameLocator('iframe[name="gameIframe"]').locator('#bet-option-100');
        await defaultBetSelection.click();
        >removed to improve with an IF scenario
        */


    await page.frameLocator('iframe[name="gameIframe"]').locator('#buy-bonus-button').click();
    
    const betButton = page.frameLocator('iframe[name="gameIframe"]').locator('#bonus-arrow-right');
    const delay = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve();
            }, ms);
        });
    };


    for (let i = 0; i < 4; i++) {
        await betButton.click();
        if (i < 4) await delay(400);
    };

    await page.frameLocator('iframe[name="gameIframe"]').locator('#bonus-choice-0').click();
    await page.frameLocator('iframe[name="gameIframe"]').locator('#bonus-buy-button').click();
});