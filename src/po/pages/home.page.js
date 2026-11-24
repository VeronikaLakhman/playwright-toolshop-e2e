import ProductCardComponent from '../components/catalog/product-card.component.js';

export class HomePage {
    constructor(page) {
        this.page = page;
        this.searchInput = page.locator('[data-test="search-query"]');
        this.searchButton = page.locator('[data-test="search-submit"]');
        this.productNames = page.locator('[data-test="product-name"]');
    }

    async open() {
        await this.page.goto('/');
    }

    getProductCard(name) {
        return new ProductCardComponent(this.page, name);
    }

    async searchProduct(name) {
        await this.searchInput.fill(name);
        await this.searchButton.click();
    }
}
