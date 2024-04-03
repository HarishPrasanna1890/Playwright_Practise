import {chromium, test } from '@playwright/test'

test('TestLeaf-Login', async()=>{

    //Create browser reference
    const browser = await chromium.launch({channel:'chrome',headless:false});
    //Launch the browser - empty browser
    const broswerContext = await browser.newContext();
    //launch the page - New tab
    const page = await broswerContext.newPage();

    await page.goto("http://leaftaps.com/opentaps/control/main");
    
    const LoginCreds = await page.locator("[class='inputLogin']");
    await LoginCreds.nth(0).fill("Demosalesmanager");
    await LoginCreds.nth(1).fill("crmsfa");
    await page.click(".decorativeSubmit");
    await page.click("//a[contains(text(),'CRM/SFA')]");
    await page.waitForTimeout(3000);
    await page.click("//a[contains(text(),'Leads')]");
    await page.click("//a[contains(text(),'Create Lead')]");
    await page.fill('createLeadForm_companyName','NIQ');
    await page.fill('createLeadForm_firstName','Harish');
    await page.fill('createLeadForm_lastName', 'A');
    await page.click('.smallSubmit');
    await page.waitForTimeout(3000);
    console.log('Created Lead');

})
