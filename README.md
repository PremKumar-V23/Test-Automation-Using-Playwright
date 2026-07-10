# Playwright Test Automation - SauceDemo

This project contains automated end-to-end UI test cases for the SauceDemo website using Playwright.

## Project Overview

The objective of this project is to automate the core functionalities of the SauceDemo application and validate its UI, navigation, product management, checkout flow, and responsiveness.

**Application Under Test**

https://www.saucedemo.com/

---

### Tech Stack

- Playwright
- JavaScript
- Node.js
- VS Code

---

## Project Structure

```
TestDocumentation/
│
├── screenshots/
│   ├── 01-login-page.png
│   ├── 02-after-login.png
│   ├── 03-sidebar.png
│   ├── 04-after-logout.png
│   ├── Desktop.png
│   ├── Tablet.png
│   └── Mobile.png
│
├── tests/
│   ├── login_and_logout_test.spec.js
│   ├── Inventory.spec.js
│   ├── Cart.spec.js
│   ├── Checkout.spec.js
│   ├── Sorting.spec.js
│   ├── UI.spec.js
│   └── Responsive.spec.js
│
├── playwright.config.js
├── package.json
└── README.md
```

---

## Automated Test Cases

### Login & Logout

- Login with valid credentials
- Verify successful login
- Logout successfully
- Verify redirection to login page

---

### Inventory

- Verify inventory page loads successfully
- Verify all products are displayed
- Verify product details
- Verify product images
- Verify product prices

---

### Cart

- Add single product
- Add multiple products
- Add all products
- Remove products
- Verify shopping cart badge
- Verify cart items

---

### Checkout

- Proceed to checkout
- Enter customer information
- Verify checkout overview
- Complete checkout
- Verify successful order completion

---

### Product Sorting

- Sort Name (A-Z)
- Sort Name (Z-A)
- Sort Price (Low-High)
- Sort Price (High-Low)

---

### UI Validation

- Verify page title
- Verify page URL
- Verify header
- Verify footer
- Verify shopping cart icon
- Verify menu button
- Verify inventory container

---

### Responsive Testing

The application is tested on:

- Desktop
- Tablet
- Mobile

Screenshots are captured for each viewport.

---

## Installation

Clone the repository

```bash
git clone https://github.com/PremKumar-V23/TestDocumentation.git
```

Navigate to the project

```bash
cd TestDocumentation
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test

```bash
npx playwright test tests/Inventory.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Run in debug mode

```bash
npx playwright test --debug
```

---

## Reports

Generate HTML report

```bash
npx playwright test --reporter=html
```

Open the report

```bash
npx playwright show-report
```

---

## Features

- End-to-End UI Automation
- Functional Testing
- Responsive Testing
- Screenshot Capture
- HTML Reporting
- Cross-browser Support
- Playwright Best Practices

---

## Author

**Prem Kumar**

GitHub: https://github.com/PremKumar-V23
