import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/base.fixture';

const { When, Then } = createBdd(test);

When('je simule une coupure réseau sur les images', async ({ page }) => {
  // ✅ Intercepte toutes les requêtes finissant par .jpg
  await page.route('**/*.jpg', route => route.abort('failed'));
  
  // Recharge la page pour appliquer la coupure
  await page.reload();
});

Then('les images doivent être brisées', async ({ page }) => {
  const images = page.locator('.inventory_item_img img');
  
  // ✅ On vérifie que l'image n'est pas chargée via l'API du navigateur
  const isImageBroken = await images.first().evaluate((img: HTMLImageElement) => {
    return img.complete && img.naturalHeight === 0;
  });
  
  expect(isImageBroken).toBe(true);
});

Then('la page d\'inventaire doit rester fonctionnelle', async ({ page, header }) => {
  // ✅ Le titre de la page est toujours visible
  await expect(page.locator('.title')).toHaveText('Products');
  
  // ✅ Le header (panier) est toujours accessible
  await expect(header.cartLink).toBeVisible();
});