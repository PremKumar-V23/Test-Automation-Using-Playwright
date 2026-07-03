import { test, expect } from '@playwright/test';

test('Login-and-Logout-Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com',
        {
            waitUntil: "domcontentloaded",
            timeout: 120000,
        },
    );
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    await expect(page).toHaveTitle("Swag Labs");
    await expect(page).toHaveURL(/saucedemo\.com/);
    await expect(page.locator('[data-test="header-container"]')).toBeVisible();
    await expect(page.locator('[data-test="primary-header"]')).toBeVisible();
    await expect(page.locator('[id="react-burger-menu-btn"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
    await expect(page.locator('[data-test="title"]')).toBeVisible();
    await expect(page.locator('[data-test="active-option"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-list"]')).toBeVisible();
    await expect(page.locator('[data-test="footer"]')).toBeVisible();
    await expect(page.locator('[data-test="footer-copy"]')).toBeVisible();
});