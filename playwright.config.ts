import { defineConfig, devices } from '@playwright/test';
import 'dotenv/config';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  retries: 0,
  reporter: [['html', { open: 'never' }]],
  use: {
    baseURL:'https://erp.globalbooks.in',
    // baseURL:'http://192.168.1.34:8000',
    storageState: '.auth/purchase-executive.json',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /auth\.setup\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: { cookies: [], origins: [] },
      },
    },
    {
      name: 'chromium',
      testIgnore: [/auth\.setup\.spec\.ts/, /\.security-guard\.spec\.ts$/],
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/purchase-executive.json',
      },
    },
    {
      name: 'security-guard',
      testMatch: /\.security-guard\.spec\.ts$/,
      dependencies: ['setup'],
      use: {
        ...devices['Desktop Chrome'],
        storageState: '.auth/security-guard.json',
      },
    },
  ],
});