export default class ProductCardComponent {
    constructor(page, name) {
        this.name = name;

        this.card = page.locator(
            `xpath=//a[.//*[@data-test="product-name" and normalize-space(.)="${this.name}"]]`
        );

        this.productName = this.card.locator('[data-test="product-name"]');
    }

    async open() {
        await this.card.click();
    }
}
