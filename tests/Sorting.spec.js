import { test, expect } from '@playwright/test';

test('Checking-the-filter', async ({ page }) => {
    await page.goto('https://www.saucedemo.com',
        {
            waitUntil: "domcontentloaded",
            timeout: 120000,
        },
    );
    await page.fill('[data-test="username"]', 'standard_user');
    await page.fill('[data-test="password"]', 'secret_sauce');
    await page.click('[data-test="login-button"]');
    const sortDropdown = page.locator('[data-test="product-sort-container"]');

    await sortDropdown.selectOption("az");

    let names = await page.locator(".inventory_item_name").allTextContents();
    let expectedNames = [...names].sort();

    expect(names).toEqual(expectedNames);

    await sortDropdown.selectOption("za");

    names = await page.locator(".inventory_item_name").allTextContents();
    expectedNames = [...names].sort().reverse();

    expect(names).toEqual(expectedNames);

    await sortDropdown.selectOption("lohi");

    let prices = await page.locator(".inventory_item_price").allTextContents();

    let actualPrices = prices.map(price =>
        Number(price.replace("$", ""))
    );

    let expectedPrices = [...actualPrices].sort((a, b) => a - b);

    expect(actualPrices).toEqual(expectedPrices);

    await sortDropdown.selectOption("hilo");

    prices = await page.locator(".inventory_item_price").allTextContents();

    actualPrices = prices.map(price =>
        Number(price.replace("$", ""))
    );

    expectedPrices = [...actualPrices].sort((a, b) => b - a);

    expect(actualPrices).toEqual(expectedPrices);
});
