export class HeaderComponent {
  constructor(page) {
    this.userMenu = page.locator('[data-test="nav-menu"]');
  }
}
