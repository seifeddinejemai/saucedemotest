// tests/tri.error.spec.ts
import { test, expect } from '../fixtures/base.fixture';

test('Le tri par prix est défectueux pour error_user', async ({ inventoryPage }) => {
  // 1. Vérifier l'état initial (optionnel mais bonne pratique)
  const initialPrices = await inventoryPage.getPricesAsNumbers();

  // 2. Tenter de trier par prix croissant
  await inventoryPage.selectSortOption('lohi');

  // 3. Vérifier que le tri n'a PAS eu lieu (le bug)
  const pricesAfterSort = await inventoryPage.getPricesAsNumbers();
  expect(pricesAfterSort).toEqual(initialPrices); // Les prix n'ont pas changé

  // 4. (Optionnel) Vérifier la présence d'un message d'erreur si l'UI en affiche un
  // await expect(page.locator('.error-message')).toBeVisible();
});