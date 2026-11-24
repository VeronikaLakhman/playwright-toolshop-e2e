import { test, expect } from '@playwright/test';
import { HomePage } from '../src/po/pages/home.page.js';
import { catalogData } from '../src/data-provider/catalog.data.js';

test.describe('Product Search', () => {
    test('should display products matching the search query', async ({ page }) => {
        const homePage = new HomePage(page);

        await homePage.open();
        await homePage.searchProduct(catalogData.searchQueries.pliers);

        await expect(homePage.productNames).toHaveCount(4);

        const products = await homePage.productNames.all();

        for (const product of products) {
            await expect(product).toContainText(catalogData.searchQueries.pliers);
        }
    });
});
