const {test,expect, selectors} = require('@playwright/test')

test('Selector test ', async ({page}) => {

//Helps close conditional ads
const closeAd = page.locator('div.continue-prompt-text');

await page.addLocatorHandler(closeAd, async =>{
    closeAd.click();
});
await page.goto('https://practice.expandtesting.com/login');
await page.pause();
//HTML element form
await page.click('id=username');
await page.locator('id=username').fill('practice');
//css selector form
await page.click('#password');
await page.locator('#password').fill('SuperSecretPassword!');
//Xpath
await page.locator('//*[@id="submit-login"]').click();

//#dismiss-button-element > div
});