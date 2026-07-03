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
    await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    await page.locator('[data-test="checkout"]').click();
    await page.fill('[data-test="firstName"]', 'Prem');
    await page.fill('[data-test="lastName"]', 'Kumar');
    await page.fill('[data-test="postalCode"]', '123045');
    await page.locator('[data-test="continue"]').click();
    await expect(page.locator('[data-test="item-4-title-link"]')).toBeVisible();
    await expect(page.locator('[data-test="item-0-title-link"]')).toBeVisible();
    await page.locator('[data-test="finish"]').click();
    await page.screenshot('Checkout.png');
    await page.locator('[data-test="back-to-products"]').click();

})

test('Calculator', async ({ page }) => {
    const prices = await page.locator(".inventory_item_price").allTextContents();

    let expectedTotal = 0;

    for (const price of prices) {
        expectedTotal += Number(price.replace("$", ""));
    }
    console.log(expectedTotal);
})