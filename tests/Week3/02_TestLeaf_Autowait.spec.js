import {test, expect} from '@playwright/test'

test('Autowait testlaf', async({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Invisibility"});
    const btnToClick = cardToSelect.getByRole("button").filter({hasText:'I am about to hide'});
    


})