export class ProductPage {
    constructor(page) {
        this.page = page;

        this.productName = page.locator('[data-test="product-name"]');
        this.productPrice = page.locator('[data-test="unit-price"]');
        this.productImage = page.locator('app-detail img.figure-img');
    }
}