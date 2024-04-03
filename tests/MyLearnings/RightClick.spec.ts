import {test, expect} from '@playwright/test'

test("Right click", async ({page})=>{

    await page.goto("https://swisnl.github.io/jQuery-contextMenu/demo.html");
    const btn = await page.locator("//span[text()='right click me']");
    await btn.click({button: 'right'});
    //await page.locator("//a[contains(text(),'Women Ethnic')]").click();
    await page.waitForTimeout(5000);

})