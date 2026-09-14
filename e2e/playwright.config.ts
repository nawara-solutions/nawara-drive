import path from 'node:path';
import { defineConfig, devices } from '@playwright/test';

/**
 * No app is scaffolded in this repo yet, so `baseURL` and `webServer` are left generic/unset
 * on purpose. Once the first app (e.g. the admin dashboard) exists:
 *  - point `baseURL` at its dev server URL
 *  - uncomment/fill in `webServer` so `npm run test:e2e` boots the app automatically
 * See e2e/README.md.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  outputDir: path.join(__dirname, 'test-results'),
  reporter: [['html', { outputFolder: path.join(__dirname, 'playwright-report'), open: 'never' }]],
  use: {
    baseURL: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
    { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  ],
  // webServer: {
  //   command: 'npm run start --workspace=apps/<app-name>',
  //   url: process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
