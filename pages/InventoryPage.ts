import { Page, Locator } from '@playwright/test';

export class InventoryPage {
  readonly page: Page;
  readonly sortDropdown: Locator;
  readonly itemPrices: Locator;
  readonly itemNames: Locator;

  constructor(page: Page) {
    this.page = page;
    this.sortDropdown = page.locator('.product_sort_container');
    this.itemPrices = page.locator('.inventory_item_price');
    this.itemNames = page.locator('.inventory_item_name');
  }

  // ✅ On élargit le type pour accepter les 4 options
  async selectSortOption(option: 'lohi' | 'hilo' | 'az' | 'za') {
    await this.sortDropdown.selectOption(option);
  }

  async getPricesAsNumbers(): Promise<number[]> {
    const priceTexts = await this.itemPrices.allTextContents();
    return priceTexts.map(price => parseFloat(price.replace('$', '')));
  }

  // ✅ Nouvelle méthode pour récupérer les noms
  async getNames(): Promise<string[]> {
    return await this.itemNames.allTextContents();
  }

  // ... (gardez la méthode addToCart que vous avez déjà ajoutée)
  async addToCart(productName: string): Promise<void> {
    const product = this.page.locator('.inventory_item').filter({ hasText: productName });
    await product.getByRole('button', { name: 'Add to cart' }).click();
  }
}