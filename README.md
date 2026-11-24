# playwright-toolshop-e2e

End-to-end test automation framework for Toolshop, built with Playwright Test and JavaScript using the Page Object Model (POM) design pattern.

## Tech Stack

- Playwright Test
- JavaScript (ES Modules)
- Page Object Model (POM)
- dotenv
- Google Chrome, Firefox, and WebKit (Safari engine)

## Test Scenarios

The framework covers four E2E scenarios:

1. User login with valid credentials
2. Product details verification
3. Product search
4. Product category filtering

## Environment Setup

1. Install Node.js 24 (recommended) and Google Chrome.

2. Install project dependencies:

   ```bash
   npm install
   ```

3. Install Playwright browsers:

   ```bash
   npx playwright install
   ```

4. Create a `.env` file in the project root using `.env.example` as a template.

   Configure the following environment variables:

   ```env
   REGULAR_USER_1_EMAIL=
   REGULAR_USER_1_PASSWORD=
   REGULAR_USER_1_NAME=
   ```

   Provide valid Toolshop test user credentials and the corresponding full name.

## Running Tests

Run all E2E tests:

```bash
npm test
```

Run tests in a specific browser:

```bash
npx playwright test --project=chrome
npx playwright test --project=firefox
npx playwright test --project=webkit
```

Run a specific test file:

```bash
npx playwright test tests/login.spec.js --project=chrome
```

View the HTML report:

```bash
npx playwright show-report
```

## Test Configuration

The framework is configured to:

- Execute tests in headless mode.
- Run tests across Chrome, Firefox, and WebKit.
- Use 2 parallel workers.
- Retry failed tests up to 2 times.
- Collect a trace on the first retry.
- Generate HTML test reports.