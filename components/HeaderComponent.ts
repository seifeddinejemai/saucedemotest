import { Page, Locator } from '@playwright/test';

export class HeaderComponent {
  readonly cartLink: Locator;
  readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async getCartBadgeCount(): Promise<number> {
    if ((await this.cartBadge.count()) === 0) return 0;
    return parseInt((await this.cartBadge.textContent()) ?? '0', 10);
  }

  async openCart(): Promise<void> {
    await this.cartLink.click();
    await this.page.waitForURL(/cart/);
  }
}