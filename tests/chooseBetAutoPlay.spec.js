import {test, expect} from '@playwright/test';
import data from '../data/pages.json';

test('Select bet then start Autoplay', async ({ page }) => {
    await page.goto(data.pageURL);
    const title2 = await page.title();
    expect(title2).toBe(data.pageName);
    await page.frameLocator('iframe[name="gameIframe"]').locator('#autoplay-button').click();
    await page.frameLocator('iframe[name="gameIframe"]').locator('#autoplay-option-10').click();
});

/**create this test with fixture
    create 2reports:
        1 through html
        1 through Jenkins

[Ок да обобщим тасковете :
Следващ тест ползвайки фиксчър
Репорт в дженкинс и репорт като HTML (трябва да е като артефакт в дженкинс)
След като ги има тези. Създаваш дженкинс пайплаин с Jenkins file и пускаш тестовете през него ... също трябва да бъде запазен репортинга
След като това е готово, ще минеш проекта на TypeScript]

Update:
-DONE- install Stage View plugin in Jenkins
-install pw pluhin for Jenkins: I Instlalled HMTL Plugin
-DONE- I THINK - fix your fixtures (in PW config.js there should be a lot more info. Check your original project from theUdemy course)
-DONE- and fianlly run the test through a report
- Always install DOcker (pipeline) plugin in Jenkins


QUESTIONS:
should I sta with .js or .ts and hat's the difference?

**/