import { test as base } from 'playwright-bdd';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { HeaderComponent } from '../components/HeaderComponent';

type MyFixtures = {
  header: HeaderComponent;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
};

export const test = base.extend<MyFixtures>({
  header: async ({ page }, use) => {
    await use(new HeaderComponent(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },
});

export { expect } from '@playwright/test';