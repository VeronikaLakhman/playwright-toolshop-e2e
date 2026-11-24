import ProductCardComponent from '../components/catalog/product-card.component.js';

export class HomePage {
    constructor(page) {
        this.page = page;
    }

    async open() {
        await this.page.goto('/');
    }

    getProductCard(name) {
        return new ProductCardComponent(this.page, name);
    }
}
