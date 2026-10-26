import { test as base } from 'playwright-bdd';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { HeaderComponent } from '../components/HeaderComponent';

type MyFixtures = {
  header: HeaderComponent;
  inventoryPage: InventoryPage;
  cartPage: CartPage;
  checkoutPage: CheckoutPage; // ✅ Ajouté
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
  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page)); // ✅ Ajouté
  },
});

export { expect } from '@playwright/test';