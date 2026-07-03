import { test, expect } from '@playwright/test';

test('Login-and-Logout-Test', async ({ page }) => {
    await page.goto('https://www.saucedemo.com',
        {
            waitUntil: "domcontentloaded",
            timeout: 120000,
        },
    );
    await page.pause();
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
        const buttons = page.locator('[data-test^="add-to-cart"]');

    let count = await buttons.count();
    await expect(count).toBeGreaterThan(0);

    // Click the first add-to-cart button repeatedly since buttons change to "remove" after clicking
    for (let i = 0; i < count; i++) {
        await buttons.first().click();
    }

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveText("6");

    await page.locator('[data-test="shopping-cart-link"]').click();

    const Rbuttons = page.locator('[data-test^="remove"]')

    let rcount = await Rbuttons.count();
    await expect(rcount).toBeGreaterThan(0);

    // Click the first add-to-cart button repeatedly since buttons change to "remove" after clicking
    for (let i = 0; i < rcount; i++) {
        await Rbuttons.first().click();
    }

    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0);


    await page.locator('[data-test="continue-shopping"]').click()

})