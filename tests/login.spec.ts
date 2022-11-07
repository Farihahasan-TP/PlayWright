import { test, expect } from '@playwright/test';

test.describe('Login Cases', ()  => {

    test('should allow me to input valid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('problem_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(/inventory/);
    
    });

    test('Verify the list shoulf be filter from AtoZ', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
        await page.locator('#user-name').fill('problem_user');
        await page.locator('#password').fill('secret_sauce');
        await page.locator('#login-button').click();
        await expect(page).toHaveURL(/inventory/);
        await page.locator('.product_sort_container').click();
        
    
    });
    
    test('should allow me to input invalid credentials', async ({ page }) => {
        await page.goto('https://www.saucedemo.com/');
    
        await page.locator('#user-name').fill('fariha.hasan@test.com');
        await page.locator('#password').fill('12345678');
        await page.locator('#login-button').click();
        await expect(page).toThrowError;
    
    });
});

