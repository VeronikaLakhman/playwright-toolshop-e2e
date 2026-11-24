import { test, expect } from '@playwright/test';
import { HomePage } from '../src/po/pages/home.page.js';
import { catalogData } from '../src/data-provider/catalog.data.js';

test.describe('Product Filtering', () => {
    test('should display products matching the selected category', async ({ page }) => {
        const homePage = new HomePage(page);
        const category = catalogData.filters.categories.hammer;

        await homePage.open();
        await homePage.filterByCategory(category);

        await expect.poll(async () => {
            const names = await homePage.productNames.allTextContents();

            return names.length > 0 &&
                names.every(name => name.toLowerCase().includes(category.toLowerCase()));
        }, { timeout: 10000 }).toBe(true);

        const products = await homePage.productNames.all();

        expect(products.length).toBeGreaterThan(0);

        for (const product of products) {
            await expect(product).toContainText(new RegExp(category, 'i'));
        }
    });
});
