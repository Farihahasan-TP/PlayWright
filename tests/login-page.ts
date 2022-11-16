import {expect, Locator, Page} from '@playwright/test';

export class LoginPage {

    page: Page;
    txtUsername: Locator;
    txtPassword: Locator;
    loginButton: Locator;
    errorMsg: Locator; 
    inventoryItems: Locator;

    constructor(page: Page){

        this.page = page;
        this.txtUsername = page.locator('#user-name');
        this.txtPassword = page.locator('#password');
        this.loginButton = page.locator('#login-button');
        this.errorMsg = page.locator('.error-message-container.error');
    }

    async webPage(){
        await this.page.goto('https://www.saucedemo.com/');
        
    }
}


