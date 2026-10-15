import { test, expect } from '@playwright/test';
test.describe('Test Group' , () => {
    test.beforeEach('Login', async ({page}) => {
  await page.goto('https://practice.expandtesting.com/login');
  //Helps close conditional ads
        const closeAd = page.locator('div.continue-prompt-text');

        await page.addLocatorHandler(closeAd, async =>{
        closeAd.click();
        });
    await page.pause();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('button',  { name: 'Login' }).click();
  
    }); 

    test('Homepage', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/');
    });
    
    test('Logout', async ({ page }) => {
    await page.getByRole('link', { name: 'Logout' }).click();
    });

    test.afterAll('Close Page', async ({ page }) => {
    await page.close();
    });
});
