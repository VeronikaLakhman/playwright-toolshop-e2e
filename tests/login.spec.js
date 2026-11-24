import { test, expect } from '@playwright/test';
import { LoginPage } from '../src/po/pages/login.page.js';
import { HeaderComponent } from '../src/po/components/common/header.component.js';
import { usersData } from '../src/data-provider/users.data.js';

test.describe('Authentication', () => {
  test('should sign in with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const header = new HeaderComponent(page);
    const user = usersData.regularUser1;

    await loginPage.open();
    await loginPage.login(user.email, user.password);

    await expect(header.userMenu).toContainText(user.name);
  });
});