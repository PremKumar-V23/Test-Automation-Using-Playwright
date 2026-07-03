import { test, expect } from '@playwright/test';

const viewports = [
  { name: 'Desktop', width: 1920, height: 1080 },
  { name: 'Laptop', width: 1366, height: 768 },
  { name: 'Tablet', width: 768, height: 1024 },
  { name: 'Mobile', width: 390, height: 844 },
];

for (const viewport of viewports) {
  test(`Responsive UI - ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({
      width: viewport.width,
      height: viewport.height,
    });

    await page.goto('https://www.saucedemo.com/');

    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');

    await expect(page).toHaveURL(/inventory\.html/);

    await expect(page.locator('[data-test="primary-header"]')).toBeVisible();
    await expect(page.locator('[data-test="shopping-cart-link"]')).toBeVisible();
    await expect(page.locator('[data-test="product-sort-container"]')).toBeVisible();
    await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    await expect(page.locator('.inventory_item')).toHaveCount(6);
    await expect(page.locator('[data-test="footer"]')).toBeVisible();

    await page.screenshot({
      path: `screenshots/${viewport.name}.png`,
      fullPage: true,
    });
  });
}