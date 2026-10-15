const {test,expect, selectors} = require('@playwright/test')
//checks if field is enabled at locator then fills it out
test('Assertion Test ', async ({page}) => {
   await page.goto('https://practice.expandtesting.com/locators');
   await page.pause();
   await expect(page.locator('id=newsletterEmail')).toBeEnabled();
   
   if(page.$('id=newsletterEmail'))
   {
    await page.locator('id=newsletterEmail').fill('doomscroll');
   }


});
//checks if text exists at the locator
test('Assertion Test2 ', async ({page}) => {
   await page.goto('https://practice.expandtesting.com/locators');
   await page.pause();
   await expect(page.locator('text=Locators Test page for Automation Testing')).toHaveText('Locators Test page for Automation Testing');
});

//checks selected value in dropdown
test('Assertion Test3 ', async ({page}) => {
   await page.goto('https://practice.expandtesting.com/locators');
   await page.pause();
   await expect(page.locator('#countrySelect option:checked')).toHaveText('France');

});
// checks for specific attribute at the locator
test.only('Assertion Test4 ', async ({page}) => {
   await page.goto('https://practice.expandtesting.com/locators');
   await page.pause();
   await expect(page.locator('#core > div.page-layout > div > div > div:nth-child(5) > input.form-control.mb-2')).toHaveAttribute('class','form-control mb-2');

});