import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');

  await expect(page).toHaveURL(/inventory\.html/);
});

test('Verify Inventory Page', async ({ page }) => {
  await expect(page.locator('.inventory_item')).toHaveCount(6);

  const products = page.locator('.inventory_item');
  const count = await products.count();

  for (let i = 0; i < count; i++) {
    const product = products.nth(i);

    await expect(product.locator('.inventory_item_img img')).toBeVisible();

    const name = product.locator('.inventory_item_name');
    await expect(name).toBeVisible();
    await expect(name).not.toHaveText('');

    const description = product.locator('.inventory_item_desc');
    await expect(description).toBeVisible();
    await expect(description).not.toHaveText('');

    const price = product.locator('.inventory_item_price');
    await expect(price).toBeVisible();
    await expect(price).toContainText('$');

    await expect(
      product.locator('[data-test^="add-to-cart"]')
    ).toBeVisible();
  }
});

test('Verify Product Details Page', async ({ page }) => {
  const firstProduct = page.locator('.inventory_item').first();

  const productName = await firstProduct
    .locator('.inventory_item_name')
    .textContent();

  const productPrice = await firstProduct
    .locator('.inventory_item_price')
    .textContent();

  await firstProduct.locator('.inventory_item_name').click();

  await expect(page).toHaveURL(/inventory-item\.html/);

  await expect(page.locator('.inventory_details_name')).toHaveText(productName);

  await expect(page.locator('.inventory_details_price')).toHaveText(productPrice);

  await expect(page.locator('.inventory_details_img')).toBeVisible();

  await expect(page.locator('.inventory_details_desc')).toBeVisible();

  await expect(
    page.locator('[data-test^="add-to-cart"]')
  ).toBeVisible();

  await page.click('[data-test="back-to-products"]');

  await expect(page).toHaveURL(/inventory\.html/);
});

test('Verify Reset App State', async ({ page }) => {
  await page.locator('[data-test^="add-to-cart"]').first().click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveText('1');

  await page.getByRole('button', { name: 'Open Menu' }).click();

  await page.locator('[data-test="reset-sidebar-link"]').click();

  await page.getByRole('button', { name: 'Close Menu' }).click();

  await expect(
    page.locator('[data-test="shopping-cart-badge"]')
  ).toHaveCount(0);

  await expect(
    page.locator('[data-test^="add-to-cart"]').first()
  ).toBeVisible();
});