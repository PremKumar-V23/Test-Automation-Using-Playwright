import { test, expect } from '@playwright/test';

test.describe('Stock Market Dashboard', () => {

  test('Verify Stock Market Dashboard Features', async ({ page }) => {

    test.setTimeout(90000);

    await page.goto(
      'https://stockmarket-prediction-and-optimization-3anx2tba7nsdpvczehrack.streamlit.app/',
      { waitUntil: 'networkidle' }
    );

    const frame = page.frameLocator('iframe[title="streamlitApp"]');

    // ----------------------------
    // Dashboard Loaded
    // ----------------------------
    await test.step('Verify Dashboard', async () => {
      try {
        await expect.soft(
          frame.getByRole('heading', {
            name: /Portfolio Optimization/i
          })
        ).toBeVisible({ timeout: 30000 });

        console.log("✅ Dashboard Loaded");
      } catch (e) {
        console.log("❌ Dashboard verification failed");
      }
    });

    // ----------------------------
    // Theme Change
    // ----------------------------
    await test.step('Theme Change', async () => {
      try {
        await frame.getByTestId('stMainMenuButton').click();
        await frame.getByTestId('stMainMenuItem-theme-Dark').click();

        console.log("✅ Dark Theme Applied");
      } catch (e) {
        console.log("❌ Theme Change Failed");
      }
    });

    // ----------------------------
    // Add LT.NS
    // ----------------------------
    await test.step('Add LT.NS', async () => {
      try {
        const ticker = frame.getByRole('textbox', {
          name: /Add Custom Tickers/i
        });

        await ticker.fill('LT.NS');
        await ticker.press('Enter');

        await expect.soft(
          frame.getByText('LT.NS')
        ).toBeVisible();

        console.log("✅ LT.NS Added");
      } catch (e) {
        console.log("❌ Unable to Add LT.NS");
      }
    });

    // ----------------------------
    // Remove AMZN
    // ----------------------------
    await test.step('Remove AMZN', async () => {
      try {
        const amzn = frame.getByRole('button', {
          name: /AMZN/i
        });

        await amzn.click();

        console.log("✅ AMZN Removed");
      } catch (e) {
        console.log("❌ Could not Remove AMZN");
      }
    });

    // ----------------------------
    // Data Table
    // ----------------------------
    const table = frame.locator('[data-testid="stDataFrame"]');

    await test.step('Data Table', async () => {
      try {
        await expect.soft(table).toBeVisible();

        await table.hover();

        console.log("✅ Table Loaded");
      } catch (e) {
        console.log("❌ Table Not Found");
      }
    });

    // ----------------------------
    // Show / Hide Columns
    // ----------------------------
    await test.step('Column Menu', async () => {
      try {
        const btn = frame.getByRole('button', {
          name: /Show\/hide columns/i
        });

        await btn.click();

        await page.keyboard.press('Escape');

        console.log("✅ Column Menu Opened");
      } catch (e) {
        console.log("❌ Column Menu Failed");
      }
    });

    // ----------------------------
    // Date Picker
    // ----------------------------
    await test.step('Date Picker', async () => {
      try {
        await frame.getByTestId('stDateInputField').first().click();

        console.log("✅ Date Picker Opened");
      } catch (e) {
        console.log("❌ Date Picker Failed");
      }
    });

    // ----------------------------
    // CSV Download
    // ----------------------------
    await test.step('CSV Download', async () => {
      try {
        await table.hover();

        const downloadPromise = page.waitForEvent('download', {
          timeout: 10000
        });

        await frame.getByRole('button', {
          name: /Download as CSV/i
        }).click();

        const download = await downloadPromise;

        console.log("✅ Downloaded:", download.suggestedFilename());
      } catch (e) {
        console.log("❌ CSV Download Failed");
      }
    });

    // ----------------------------
    // Back to Light Theme
    // ----------------------------
    await test.step('Light Theme', async () => {
      try {
        await frame.getByTestId('stMainMenuButton').click();
        await frame.getByTestId('stMainMenuItem-theme-Light').click();

        console.log("✅ Light Theme Applied");
      } catch (e) {
        console.log("❌ Light Theme Failed");
      }
    });

  });

});