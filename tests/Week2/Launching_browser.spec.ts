import {chromium, test } from '@playwright/test'

test('Launching broswer', async()=>{

    //Create browser reference
    const browser = await chromium.launch({channel:'chrome',headless:false});
    //Launch the browser - empty browser
    const broswerContext = await browser.newContext();
    //launch the page - New tab
    const page = await broswerContext.newPage();
    //Loading the url
    await page.goto("https://google.com");
    //wait for 3 secs
    await page.waitForTimeout(3000);
    




    


})