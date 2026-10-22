// playwright.config.ts
import { defineConfig } from '@playwright/test';
import { defineBddConfig } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/**/*.feature',
  steps: [
    'features/steps/**/*.ts',
    'fixtures/**/*.ts',
  ],
  language: 'fr',
});

export default defineConfig({
  testDir,
  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],
  use: {
    baseURL: 'https://www.saucedemo.com',
  },
  projects: [
    {
      name: 'setup',
      testDir: '.',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { storageState: '.auth/user.json' },
      grepInvert: /@error-user/,   // ✅ EXCLUT les tests taggés @error-user
      dependencies: ['setup'],
    },
    {
      name: 'error-user-tests',
      use: { storageState: '.auth/error-user.json' },
      grep: /@error-user/,          // ✅ INCLUT uniquement @error-user
      dependencies: ['setup'],
    },
  ],
});