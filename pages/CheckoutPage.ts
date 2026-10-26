import { Page, Locator } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;
  readonly finishButton: Locator;
  readonly completeHeader: Locator;

  constructor(page: Page) {
    this.page = page;
    this.firstNameInput = page.locator('#first-name');
    this.lastNameInput = page.locator('#last-name');
    this.postalCodeInput = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
    this.completeHeader = page.locator('.complete-header');
  }

  async fillShippingInfo(firstName: string, lastName: string, zipCode: string) {
    await this.firstNameInput.fill(firstName);
    await this.lastNameInput.fill(lastName);
    await this.postalCodeInput.fill(zipCode);
    await this.continueButton.click();
    await this.page.waitForURL(/checkout-step-two/);
  }

  async finishCheckout() {
    await this.finishButton.click();
    await this.page.waitForURL(/checkout-complete/);
  }

  async getConfirmationMessage(): Promise<string> {
    return (await this.completeHeader.textContent()) ?? '';
  }
}