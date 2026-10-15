import { test, expect } from '@playwright/test';

test('Trace test', async ({ page, context}) => {
    context.tracing.start({
        screenshots: true,
        snapshots: true,
        sources: true,
    });

  await page.goto('https://practice.expandtesting.com/');
  await page.getByRole('link', { name: 'Try it out' }).nth(1).click();
  await page.locator('iframe[name="aswift_8"]').contentFrame().getByRole('button', { name: 'Close ad' }).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('practice');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('SuperSecretPassword!');
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('link', { name: 'Logout' }).click();

  context.tracing.stop({
    path: 'trace_results.zip'
  });
});