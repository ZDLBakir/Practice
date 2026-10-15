// gets dependencies in playright\test folder in node modules folder
const {test, expect} = require('@playwright/test')
// This is the start of the test block
test('my Test1 ', async ({page}) => {
    // must use await and async to return a promise and for the web page to be fully loaded or else it will move on before the desired webpage is loaded fully and will fail
    await page.goto('https://google.com')
    //checks if a title has this on the web page tested
    await expect(page).toHaveTitle('Google')
})