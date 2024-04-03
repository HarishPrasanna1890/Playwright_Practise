import {test, expect} from '@playwright/test'
import { Loginpage } from '../Pages/LoginPage';
import { HomePage } from '../Pages/HomePage';

test("Login Test", async({page})=>{

    const lp = new Loginpage(page);
    await lp.gotoLoginPage();
    await lp.doLogin('Harish1890', 'Test@123')
    await page.waitForEvent(3000)

    const hp = new HomePage(page);
    const pageTitle = await hp.title();
    expect(pageTitle).toHaveTitle('STORE');
})


