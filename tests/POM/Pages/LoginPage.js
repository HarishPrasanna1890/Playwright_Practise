//import {test} from '@playwright/test'

exports.Loginpage = class Loginpage{
    constructor(page){
        this.page = page;
        this.loginlink = '#login2';
        this.usernameInput = '#loginusername'
        this.userPassword = '#loginpassword'
        this.smtButton = "//button[text()='Log in']"
    }

    async gotoLoginPage(){
        await this.page.goto("https://www.demoblaze.com/index.html");
    }

    async doLogin(username, password){
        await this.page.locator(this.loginlink).click();
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.userPassword).fill(password);
        await this.page.locator(this.smtButton).click();
    }
}

