import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/base.fixture';

const { Given, When, Then } = createBdd(test);

When('j\'ajoute {string} au panier', async ({ inventoryPage }, productName: string) => {
  await inventoryPage.addToCart(productName);
});

When('je navigue vers le panier', async ({ header }) => {
  await header.openCart();
});

When('je retire {string} du panier', async ({ cartPage }, productName: string) => {
  await cartPage.removeItem(productName);
});

Then('le badge du panier doit afficher {int}', async ({ header }, count: number) => {
  expect(await header.getCartBadgeCount()).toBe(count);
});

Then('le panier doit contenir {string}', async ({ cartPage }, productName: string) => {
  const names = await cartPage.getItemNames();
  expect(names).toContain(productName);
});

Then(
  'la quantité de {string} doit être {int}',
  async ({ cartPage }, productName: string, qty: number) => {
    expect(await cartPage.getItemQuantity(productName)).toBe(qty);
  },
);

Then('le panier doit être vide', async ({ cartPage }) => {
  expect(await cartPage.getItemNames()).toHaveLength(0);
});