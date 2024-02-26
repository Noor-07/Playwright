const {test, expect} = require('@playwright/test');

test ('Login Page', async ({page})=>
{

await page.goto("https://practicetestautomation.com/practice-test-login/");

// get title
console.log(await page.title());

//provide username fill method -CSS
await page.locator('#username').fill("student")

//provide password fill method -CSS
await page.locator('#password').fill("Password123")

//Submit --> Click Method -XPATH
await page.click ("//button[@id='submit']")

//verify logout link presence -XPATH
const logoutLink = await page.locator("//a[normalize-space()='Log out']")

await expect(logoutLink).toBeVisible();

})



