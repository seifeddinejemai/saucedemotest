import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/base.fixture';

const { Given, When, Then } = createBdd(test);

Given('je suis sur la page d\'inventaire', async ({ inventoryPage }) => {
  await inventoryPage.page.goto('/inventory.html');
  await expect(inventoryPage.page).toHaveURL(/inventory/);
});

When('je trie les produits par {string}', async ({ inventoryPage }, sortLabel: string) => {
  // ✅ Dictionnaire de correspondance : Gherkin (français) -> HTML (technique)
  const sortMap: Record<string, 'lohi' | 'hilo' | 'az' | 'za'> = {
    'Prix (croissant)': 'lohi',
    'Prix (décroissant)': 'hilo',
    'Nom (A à Z)': 'az',
    'Nom (Z à A)': 'za',
  };

  const option = sortMap[sortLabel];

  if (!option) {
    throw new Error(`Option de tri inconnue : "${sortLabel}"`);
  }

  await inventoryPage.selectSortOption(option);
});
// ✅ Step générique (Data-Driven) corrigé avec {string}
Then('les {string} doivent être triés par ordre {string}', async ({ inventoryPage }, critere: string, ordre: string) => {
  if (critere === 'prix') {
    const prices = await inventoryPage.getPricesAsNumbers();
    const sorted = [...prices].sort((a, b) => ordre === 'croissant' ? a - b : b - a);
    expect(prices).toEqual(sorted);
  } 
  else if (critere === 'nom') {
    const names = await inventoryPage.getNames();
    const sorted = [...names].sort((a, b) => 
      ordre === 'croissant' ? a.localeCompare(b) : b.localeCompare(a)
    );
    expect(names).toEqual(sorted);
  }
});

// ✅ On réintègre le step pour error_user qui avait disparu
Then('les prix ne doivent pas être triés par ordre croissant', async ({ inventoryPage }) => {
  const prices = await inventoryPage.getPricesAsNumbers();
  const sorted = [...prices].sort((a, b) => a - b);
  expect(prices).not.toEqual(sorted);
});