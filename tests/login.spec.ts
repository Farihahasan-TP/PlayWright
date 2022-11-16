import { test, expect } from '@playwright/test';
import {LoginPage} from './login-page';

test.describe('Login Cases', ()  => {

    test('Verify the user input valid credentials', async ({ page }) => {
        const loginPage = new LoginPage(page);
        loginPage.webPage();
        await loginPage.txtUsername.fill('problem_user');
        await loginPage.txtPassword.fill('secret_sauce');
        await loginPage.loginButton.click();
        await expect(page).toHaveURL(/inventory/);
    
    });

    test('Verify the list shoulf be filter from AtoZ', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('problem_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(/inventory/);
        await page.locator('.product_sort_container').click();
        const pageItems = await page.locator('.inventory_item_name');
        
    });
    
    test('Verify the user input invalid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('fariha.hasan@test.com');
        await page.locator('#password').fill('12345678');
        await page.locator('#login-button').click();
        await page.locator('.error-message-container.error').textContent();
        await expect(await page.locator('.error-message-container.error').textContent()).toBe("Epic sadface: Username and password do not match any user in this service");

    });
});