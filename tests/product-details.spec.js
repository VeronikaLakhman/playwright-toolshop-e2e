import { test, expect } from '@playwright/test';
import { HomePage } from '../src/po/pages/home.page.js';
import { ProductPage } from '../src/po/pages/product.page.js';
import { catalogData } from '../src/data-provider/catalog.data.js';

test.describe('Product Details', () => {
    test('should display product details for the selected product', async ({ page }) => {
        const homePage = new HomePage(page);
        const productPage = new ProductPage(page);
        const productName = catalogData.products.boltCutters;

        await homePage.open();
        await homePage.getProductCard(productName).open();

        await expect(productPage.productName).toHaveText(productName);

        await expect(productPage.productPrice).toBeVisible();
        const price = Number(await productPage.productPrice.innerText());
        expect(price).toBeGreaterThan(0);

        await expect(productPage.productImage).toBeVisible();
        await expect.poll(async () =>
            productPage.productImage.evaluate(img => img.naturalWidth)
        ).toBeGreaterThan(0);
    });
});