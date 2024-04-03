// Using BeforeEach and AfterEach Annotations

import{test, expect} from '@playwright/test'

let page:any;

test.beforeEach(async({browser})=>{
    page = await browser.newPage();
    await page.goto("https://www.demoblaze.com/index.html");

    await page.locator("#login2").click();
    await page.locator("#loginusername").fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
    await page.locator("//button[text()='Log in']").click();

})

test.afterEach(async()=>{

    await page.locator('#logout2').click();
})

test('Test1', async({})=>{

    const products = await page.locator('.hrefch');
    expect(products).toHaveLength(9)
});


test('Test2', async({})=>{

    await page.locator("//a[text()='Samsung galaxy s6']").click();
    await page.locator("//a[text()='Add to cart']").click();

    page.on('dialog', async dialog1=>{

        expect(dialog1.message()).toContain("Product added.");
        await dialog1.accept();


    })
    
})