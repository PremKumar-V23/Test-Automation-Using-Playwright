import { test, expect } from '@playwright/test';

test.describe('Login and Logout', () => {
  test.setTimeout(60000);

  test('User can login and logout successfully', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.screenshot({
      path: 'screenshots/01-login-page.png'
    });
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    await page.screenshot({
      path: 'screenshots/02-after-login.png'
    });
    await page.getByRole('button', { name: 'Open Menu' }).click();
    await expect(page.locator('[data-test="logout-sidebar-link"]')).toBeVisible();
    await page.screenshot({
      path: 'screenshots/03-sidebar.png'
    });
    await page.locator('[data-test="logout-sidebar-link"]').click();
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
    await page.screenshot({
      path: 'screenshots/04-after-logout.png'
    });
  });
});