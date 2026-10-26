import { createBdd } from 'playwright-bdd';
import { test, expect } from '../../fixtures/base.fixture';

const { Given, When, Then } = createBdd(test);

When('je passe à la caisse', async ({ cartPage }) => {
  await cartPage.goToCheckout();
});

When(
  'je remplis mes informations de livraison avec {string} {string} {string}',
  async ({ checkoutPage }, firstName: string, lastName: string, zipCode: string) => {
    await checkoutPage.fillShippingInfo(firstName, lastName, zipCode);
  }
);

When('je valide ma commande', async ({ checkoutPage }) => {
  await checkoutPage.finishCheckout();
});

Then('un message de confirmation doit être affiché', async ({ checkoutPage }) => {
  const message = await checkoutPage.getConfirmationMessage();
  expect(message).toContain('Thank you for your order!');
});