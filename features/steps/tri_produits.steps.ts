import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/base.fixture';

const { Given, When, Then } = createBdd(test);

Given('je suis sur la page d\'inventaire', async ({ inventoryPage }) => {
  await inventoryPage.page.goto('https://www.saucedemo.com/inventory.html');
  await expect(inventoryPage.page).toHaveURL(/inventory/);
});

When('je trie les produits par {string}', async ({ inventoryPage }, sortLabel: string) => {
  const option = sortLabel.includes('croissant') ? 'lohi' : 'hilo';
  await inventoryPage.selectSortOption(option);
});

Then('la liste des prix doit être triée par ordre croissant', async ({ inventoryPage }) => {
  const prices = await inventoryPage.getPricesAsNumbers();
  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sorted);


});
// features/steps/tri_produits.steps.ts — ajouter à la fin
Then('les prix ne doivent pas être triés par ordre croissant', async ({ inventoryPage }) => {
  const prices = await inventoryPage.getPricesAsNumbers();
  const sorted = [...prices].sort((a, b) => a - b);
  // ✅ Assertion inversée : les prix NE sont PAS triés (le bug)
  expect(prices).not.toEqual(sorted);
});