import {test, expect} from '@playwright/test'

test('Capturing screenshot', async ({page})=>{

    await page.goto("https://playwright.dev/docs/screenshots");
    await page.screenshot({ path: +Date.now()+'Homepage.png'});

})

test('Capturing full screenshot', async ({page})=>{

    await page.goto("https://playwright.dev/docs/screenshots");
    await page.screenshot({ path:'Fullpage.png',fullPage:true});

})