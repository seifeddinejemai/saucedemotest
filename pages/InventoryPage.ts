// pages/InventoryPage.ts
import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly sortDropdown: Locator;
  readonly itemPrices: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortDropdown = page.locator('.product_sort_container');
    
    this.itemPrices = page.locator('.inventory_item_price');
  }

  async selectSortOption(option: 'lohi' | 'hilo') {
    await this.sortDropdown.selectOption(option);
  }

  async getPricesAsNumbers(): Promise<number[]> {
    const priceTexts = await this.itemPrices.allTextContents();
    return priceTexts.map(price => parseFloat(price.replace('$', '')));
  }

  async addToCart(productName: string): Promise<void> {
  const product = this.page.locator('.inventory_item').filter({ hasText: productName });
  await product.getByRole('button', { name: 'Add to cart' }).click();
}
}