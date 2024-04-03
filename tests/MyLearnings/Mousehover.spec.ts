import {test, expect} from '@playwright/test'

test("Mouse hover", async ({page})=>{

    await page.goto("https://www.flipkart.com/");
    await page.getByAltText('Fashion').hover();
    await page.locator("//a[text()='Women Sarees']").click({force:true});
    //await page.locator("//a[contains(text(),'Women Ethnic')]").click();
    //await page.waitForTimeout(5000);

})