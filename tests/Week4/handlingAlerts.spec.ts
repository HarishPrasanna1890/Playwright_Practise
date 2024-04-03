import {test, expect} from '@playwright/test'

test('Simple alert with Ok', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/ ');

    //Enabling alert handling  //Dialog window handler
    page.on('dialog', async dialogbox=>{
        expect(dialogbox.type()).toContain('alert') //Alert type validation
        expect(dialogbox.message()).toContain('I am an alert box!')
        await dialogbox.accept();
    })
    //Normal alert
    await page.click("//button[@onclick='myFunctionAlert()']");
    await page.waitForTimeout(5000);
})

test('confirmation Alert with ok and cancel', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/ ');

    //Enabling alert handling  //Dialog window handler
    page.on('dialog', async dialogbox=>{
        expect(dialogbox.type()).toContain('confirm') //Alert type validation
        expect(dialogbox.message()).toContain('Press a button!')
        //await dialogbox.accept(); // close the alert by cliking OK button
        await dialogbox.dismiss(); //closing the alert by clicking Cancel button
    })
    //Normal alert
    await page.click("//button[@onclick='myFunctionConfirm()']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('You pressed Cancel!');
    await page.waitForTimeout(5000);
})

test.only('Prompt Alert with text needs to given', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/ ');

    //Enabling alert handling  //Dialog window handler
    page.on('dialog', async dialogbox=>{
        expect(dialogbox.type()).toContain('prompt') //Alert type validation
        expect(dialogbox.message()).toContain('Please enter your name:');
        expect(dialogbox.defaultValue()).toContain('Harry Potter')
        await dialogbox.accept('John'); // close the alert by cliking OK button
        //await dialogbox.dismiss(); //closing the alert by clicking Cancel button
    })
    //Normal alert
    await page.click("//button[@onclick='myFunctionPrompt()']");
    await expect(page.locator("//p[@id='demo']")).toHaveText('Hello John! How are you today?');
    await page.waitForTimeout(5000);
})